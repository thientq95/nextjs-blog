import Breadcumb from "../components/breadcumb";
import Layout from "../layouts/Main";
import ProductItem from "../components/product-item";
import { GetServerSideProps } from "next";
import Pagination from "../components/pagination";
import { server } from "../utils/server";

export const getServerSideProps: GetServerSideProps = async ({
  query: { page = 1 },
}) => {
  const currentPage = (page as number) - 1;
  const res = await fetch(
    `${server}/api/v1/web/product/all?page=${currentPage}&size=8&sort=id,desc`
  );
  const json = await res.json();

  const result = json.result;
  return {
    props: {
      products: result.items,
      total: result.total,
      page: result.page,
    },
  };
};

const ProductPage = ({ products, total, page }) => {
  const breadcrumbs = [
    {
      id: 1,
      title: "Sản phẩm",
      href: "products",
    },
  ];
  return (
    <Layout>
      <Breadcumb breadcrumbs={breadcrumbs} />
      <div className="py-4">
        <div className="container">
          <h2 className="text-center mb-[30px]">
            <span className="uppercase text-[#333] text-[28px] font-bold inline-block">
              Sản phẩm
            </span>
          </h2>
          <div className="flex flex-wrap -mx-4">
            {products.map((item) => (
              <div key={item.id} className="flex flex-col w-1/2 px-4 mb-5 lg:w-1/5 md:w-1/3 mb-4">
                <ProductItem key={item.id} item={item} />
              </div>
            ))}
          </div>
          <Pagination
            totalItems={total}
            currentPage={page + 1}
            itemsPerPage={8}
            renderPageLink={(page) => `/blog?page=${page}`}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
