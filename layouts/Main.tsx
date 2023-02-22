import Head from "next/head";
import {useRouter} from "next/router";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

type LayoutType = {
    title?: string;
    children?: React.ReactNode;
};

export default ({children, title = "Website"}: LayoutType, {configs}) => {
    const router = useRouter();
    const pathname = router.pathname;

    return (
        <div className="app-main">
            <Head>
                <title>{title}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"/>
            </Head>
            <Header/>
            <main className={pathname !== "/" ? "main-page" : ""}>{children}</main>
            <Footer/>
        </div>
    );
};
