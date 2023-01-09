import type { AppProps } from "next/app";
import { Router } from "next/router";
import React, { Fragment } from "react";
import { wrapper } from "../store";
import * as gtag from "./../utils/gtag";

import '../assets/css/style.css'

const isProduction = process.env.NODE_ENV === "production";
if (isProduction) {
  // Notice how we track pageview when route is changed
  Router.events.on("routeChangeComplete", (url: string) => gtag.pageview(url));
}



const MyApp = ({ Component, pageProps }: AppProps) => {
  
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
};
export default wrapper.withRedux(MyApp);