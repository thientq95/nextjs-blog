import { GetServerSideProps } from "next";
import { server } from "../../utils/server";
import Layout from "../../layouts/Main";
import Breadcumb from "../../components/breadcumb";
import Link from "next/link";
import { Product } from "../../types";

type ProductType = {
  product: Product;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const res = await fetch(`${server}/api/v1/web/product/detail/${pid}`);
  const json = await res.json();

  return {
    props: {
      product: json.result,
    },
  };
};

const Product = ({ product }) => {
  const breadcrumbs = [
    {
      id: 1,
      title: "Sản phẩm",
      href: "/products",
    },
    {
      id: 2,
      title: product.name,
      href: "",
    },
  ];
  if (!product) return <h1>Lỗi</h1>;
  return (
    <Layout>
      <Breadcumb breadcrumbs={breadcrumbs} />
      <section className={`container`}>
        <div className={`flex flex-wrap justify-between mt-8`}>
          <div className={`w-full lg:w-1/2`}></div>
          <div className={`min-w-0 lg:flex-1 lg:ml-5`}>
            <div className="text-2xl font-bold text-black">{product.name}</div>
            <div className="my-2 text-base text-[#845536]">
              Mã sản phẩm: <span>204900006</span>
            </div>
            <div className="h-[1px] bg-[#845536] bg-opacity-20 my-4"></div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="inline-flex">
                  <p className="text-lg font-bold text-[rgb(38,79,49)]">
                    {" "}
                    {product.price && product.price.toLocaleString()}đ
                  </p>
                  {/* <span className="px-1 text-lg">-</span> <p
                                    className="text-lg font-bold text-[rgb(38,79,49)]"> 1.658.000đ</p> */}
                </div>
              </div>
              <div className="flex flex-col items-end flex-1 min-w-0">
                <div>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <span className="ml-5 text-sm text-black text-opacity-50">
                    {" "}
                    0.0 (0 đánh giá){" "}
                  </span>
                </div>
                <div className="mt-5">
                  <span className="ml-5 text-sm text-black text-opacity-50">
                    21 lượt mua
                  </span>
                  <span className="mx-2">|</span>{" "}
                  <strong className="text-sm text-black">Hết hàng</strong>
                </div>
              </div>
            </div>
            <div className="h-[1px] bg-[#845536] bg-opacity-20 my-4"></div>
            <div>
              <div className="mb-2 text-sm font-semibold">Mô tả ngắn:</div>
              <div>
                Hỗ trợ giảm đau nhức, mỏi cơ, cải thiện cơ khớp chắc khỏe với
                mùi hương tự nhiên thơm mát mang lại cảm giác thư giãn dễ chịu
              </div>
            </div>
            <div className="h-[1px] bg-[#845536] bg-opacity-20 my-4"></div>
            <div className="detail__properties detail__properties__size">
              <div className="mb-2 text-sm font-semibold">Loại:</div>
              <div className="flex flex-wrap">
                <Link
                  href={``}
                  className="cursor-pointer inline-flex flex-col items-center relative border border-[#B78260] current-active:bg-[#FBECD5] bg-opacity-50 border-opacity-50 py-2 px-5 rounded-[3px] text-black text-decoration-none mr-4 mb-2"
                >
                  <span className="mb-1 text-sm text-black text-opacity-70">
                    300 ml
                  </span>
                  <span className="text-sm">1.658.000đ</span>
                </Link>
                <Link
                  href={``}
                  className="cursor-pointer inline-flex flex-col items-center relative border border-[#B78260] current-active:bg-[#FBECD5] bg-opacity-50 border-opacity-50 py-2 px-5 rounded-[3px] text-black text-decoration-none mr-4 mb-2"
                >
                  <span className="mb-1 text-sm text-black text-opacity-70">
                    100 ml
                  </span>
                  <span className="text-sm">1.198.000đ</span>
                </Link>
              </div>
            </div>
            <div className="h-[1px] bg-[#845536] bg-opacity-20 my-4"></div>
            <div className="py-2">
              <div className="py-0">
                <div className="mb-2 text-sm font-semibold">Số lượng:</div>
                <div className="flex items-center">
                  <div className="flex justify-between w-36 border-[#BABABA] border rounded-[3px]">
                    <button
                      type="button"
                      className="text-[#C4C4C4] hover:text-black text-lg font-extrabold w-8 h-8 inline-flex justify-center items-center"
                      data-action="minus"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      className="flex-1 border-y-0 text-center border-[#BABABA] min-w-0 h-8"
                      value="1"
                    />
                    <button
                      type="button"
                      className="text-[#C4C4C4] hover:text-black text-lg font-extrabold w-8 h-8 inline-flex justify-center items-center"
                      data-action="plus"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-4 uppercase">
                <button
                  type="button"
                  className="flex flex-1 justify-center items-center rounded-[3px] py-3 bg-[linear-gradient(90deg,#B78260_-14.95%,#815030_66.53%)]"
                >
                  <span className="text-lg font-extrabold text-white">
                    Mua ngay
                  </span>
                </button>
                <button
                  type="button"
                  className="flex border border-[#B78260] rounded-[3px] ml-4 flex-1 items-center justify-center py-3"
                >
                  <span className="text-lg font-extrabold text-[#845536]">
                    Thêm vào giỏ hàng
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <ul className="bg-white flex justify-center items-center border border-x-0 border-[#845536] border-opacity-20 py-4 mt-16">
          <div className="block text-base border-transparent cursor-pointer border-y current-active current-active:border-b-black">
            Chi tiết sản phẩm
          </div>
          <div className="block text-base border-transparent cursor-pointer ml-7 border-y current-active:border-b-black">
            Hướng dẫn
          </div>
          <div className="block text-base border-transparent cursor-pointer ml-7 border-y current-active:border-b-black">
            Thành phần
          </div>
          <div className="block text-base border-transparent cursor-pointer ml-7 border-y current-active:border-b-black">
            Hỏi đáp
          </div>
          <div className="block text-base border-transparent cursor-pointer ml-7 border-y current-active:border-b-black">
            Đánh giá
          </div>
        </ul>
        <div className="py-16">
          <div dangerouslySetInnerHTML={{ __html: product.bodyHtml }}></div>
        </div>
        <div className="mb-10 text-4xl font-bold text-center text-[rgb(38,79,49)]">
          Chúng tôi tìm thấy các sản phẩm khác, bạn có thể thích!
        </div>
        {/* <ProductRelated/> */}
      </section>
    </Layout>
  );
};

export default Product;
