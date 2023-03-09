import Breadcumb from "../components/breadcumb";
import Layout from "../layouts/Main";

const CheckoutPage = () => {
  const breadcrumbs = [
    {
      id: 1,
      title: "Đặt hàng thành công",
      href: "",
    },
  ];
  return (
    <Layout>
      <Breadcumb breadcrumbs={breadcrumbs}></Breadcumb>
      <div className="text-center py-[100px]">
        <h1>Đặt hàng thành công</h1>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
