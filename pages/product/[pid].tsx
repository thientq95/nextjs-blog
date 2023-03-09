import { GetServerSideProps } from "next";
import { server } from "../../utils/server";
import Layout from "../../layouts/Main";
import Breadcumb from "../../components/breadcumb";
import Link from "next/link";
import { Product } from "../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ProductImage from "../../components/product-image";
import AddToCart from "../../components/add-cart";
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

const Product = ({ product }: ProductType) => {
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

  // if (!product) return <h1>Lỗi</h1>;
  return (
    <Layout>
      <style>{`
       .content-main figure.image_resized, .content-main .image_resized {
        padding: 20px 0;
        text-align: center;
        margin: auto
       }
       .content-main p {
        line-height: 160%;
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 1em;
       }
      `}</style>
      <Breadcumb breadcrumbs={breadcrumbs} />
      <section className={`container`}>
        <div className={`flex flex-wrap justify-between mt-8`}>
          <div className={`w-full lg:w-1/2`}>
            <ProductImage imgSlide={product.productImages} />
          </div>
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
                    {product && product.price && product.price.toLocaleString()}
                    đ
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
              <AddToCart product={product} />
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
        <div className="py-16 max-w-[776px] mx-auto pt-[40px] pb-[20px]">
          <div className="content-main" dangerouslySetInnerHTML={{ __html: product.bodyPlain }}></div>
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
