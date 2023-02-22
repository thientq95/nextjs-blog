import {GetServerSideProps} from "next";
import {server} from "../../utils/server";
import Layout from "../../layouts/Main";
import Breadcumb from "../../components/breadcumb";

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    const pid = query.pid;
    const res = await fetch(`${server}/api/product/${pid}`);
    const product = await res.json();

    return {
        props: {
            product,
        },
    };
};

const Product = ({product}) => {
    const breadcrumbs = [
        {
            id: 1,
            title: "Sản phẩm",
            href: "/products",
        },
        {
            id: 2,
            title: "Tinh dầu thiên nhiên Bách Xanh chính hãng nguyên chất 100%",
            href: "",
        },
    ];
    return (
        <Layout>
            <Breadcumb breadcrumbs={breadcrumbs}/>

        </Layout>
    );
};

export default Product;
