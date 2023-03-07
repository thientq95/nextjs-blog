import type { AppProps } from "next/app";
import App from "next/app";
import { Router } from "next/router";
import React, { Fragment } from "react";
import { wrapper } from "../store";
import * as gtag from "./../utils/gtag";

import "../assets/css/style.css";
import { useDispatch } from "react-redux";
import {
  AnimatePresence,
  LazyMotion,
  Variants,
  domAnimation,
  m,
} from "framer-motion";
import { ThemeProvider } from "next-themes";
import Header from "../components/header";
import Footer from "../components/footer";
import { setConfigs } from "../store/reducers/config";
import {server} from "../utils/server";

const v: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 0,
  },
};

const isProduction = process.env.NODE_ENV === "production";
if (isProduction) {
  // Notice how we track pageview when route is changed
  Router.events.on("routeChangeComplete", (url: string) => gtag.pageview(url));
}

// class MyApp extends App {
//     static async getInitialProps ({ Component, pageProps, router, ctx }) {
//         let pageProps = {}
//         let data = await fetch('/api');
//         if (Component.getInitialProps) {
//           pageProps = await Component.getInitialProps(ctx)
//         }

//         return {data, pageProps}
//       }
//   return (
//     <ThemeProvider attribute="class" storageKey="theme" enableSystem>
//       <LazyMotion features={domAnimation}>
//         <Header />
//         <AnimatePresence
//           initial={false}
//           onExitComplete={() => window.scrollTo(0, 0)}
//           exitBeforeEnter
//         >
//           <m.div
//             key={router.route}
//             variants={v}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             transition={{
//               duration: 0.25,
//               type: "tween",
//             }}
//           >
//             <Component {...pageProps} />
//           </m.div>
//         </AnimatePresence>
//         <Footer />
//       </LazyMotion>
//     </ThemeProvider>
//   );
// };

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    const res = await fetch(`${server}/api/v1/web/config-theme`);
    const data = await res.json();
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const configs = data.result;
    const mainMenu = JSON.parse(
      configs.find((item) => item.key === "C22_MAIN_MENU").value
    );
    const mainMenuRes = await fetch(`${server}/api/v1/web/menu/${mainMenu[0].id}`);

    const mainMenuResponse = await mainMenuRes.json();

    // const dispatch = useDispatch();
    // dispatch(setConfigs(configs))
    const listDataParent = mainMenuResponse.result.filter(x => x.parentId === null)
    listDataParent.forEach( item => {
      item.children = mainMenuResponse.result.filter(x => x.parentId === item.id) ?? [];
    });
    return {
      data: {
        configs: configs,
        menu: listDataParent,
      },
      pageProps,
    };
  }

  render() {
    const { Component, pageProps, router, data } = this.props;
    return (
      // <ThemeProvider attribute="class" theme={`light`} storageKey="theme" enableSystem>
        <LazyMotion features={domAnimation}>
          <Header configs={data.configs} menu={data.menu} />
          <AnimatePresence
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
            exitBeforeEnter
          >
            <m.div
              key={router.route}
              variants={v}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.25,
                type: "tween",
              }}
            >
              <Component {...pageProps}  />
            </m.div>
          </AnimatePresence>
          <Footer />
        </LazyMotion>
       // </ThemeProvider>
    );
  }

}

export default wrapper.withRedux(MyApp);
