import React from "react";
import Breadcumb from "../components/breadcumb";
import Layout from "../layouts/Main";
import Cart from "../components/cart";
import Checkout from "../components/checkout";

const ShoppingCart = () => {
  const breadcrumbs = [
    {
      id: 1,
      title: "Giỏ hàng",
      href: "",
    },
  ];


  return (
    <Layout>
      <Breadcumb breadcrumbs={breadcrumbs} />
      <div className={`container`}>
        <div className={`my-4 grid grid-cols-1 lg:grid-cols-2 gap-4`}>
          <div className={`col-span-1`}>
            <Cart />
          </div>
          <div className={`col-span-1`}>
            <Checkout />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShoppingCart;
