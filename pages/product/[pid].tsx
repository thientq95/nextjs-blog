import { GetServerSideProps } from "next";
import { server } from "../../utils/server";
import Layout from "../../layouts/Main";
import Breadcumb from "../../components/breadcumb";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const res = await fetch(`${server}/api/product/${pid}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

const Product = ({ product }) => {
  const breadcrumbs = [
    {
      id: 1,
      title: "Trang chủ",
      href: "",
    },
    {
      id: 2,
      title: "Sản phẩm",
      href: "",
    },
    {
      id: 3,
      title: "Macbook pro 2021",
      href: "",
    },
  ];
  return (
    <Layout>
      <Breadcumb breadcrumbs={breadcrumbs} />
    </Layout>
  );
};

export default Product;
