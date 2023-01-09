import { GetServerSideProps } from "next";
import { setConfig } from "next/config";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import Footer from "../components/footer";
import Header from "../components/header";
import { setConfigs } from "../store/reducers/config";

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
};

export default ({ children, title = "RFood" }: LayoutType, { configs }) => {
  const router = useRouter();
  const pathname = router.pathname;
  
  return (
    <div className="app-main">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className={pathname !== "/" ? "main-page" : ""}>{children}</main>
      <Footer />
    </div>
  );
};
