import error from "next/error";
import useSWR from "swr";
import {Product} from "../../types";
import ProductItem from "../product-item";
import ProductCarousel from "./carousel";
import Link from "next/link";
import {Swiper, SwiperSlide} from 'swiper/react';

let slidesPerView = 3;
let centeredSlides = true;
let spaceBetween = 15;

const ProductFeatured = () => {
    const groupProduct = [
        {
            id: 1,
            title: 'HEALTH & WELLNESS',
            desc: 'Sản phẩm bổ trợ tăng cường sức khỏe, giúp cải thiện và ngăn ngừa các vấn đề sức khỏe thường gặp của con người.',
            productItem: [
                {
                    id: 1,
                    name: 'Tinh Dầu Thuần Chay Thiên Nhiên',
                    productImage: './images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 2,
                    name: 'WELL KID PLUS (multi-vitamin liquid) hỗ trợ tăng cường đề kháng, giúp ăn ngon giảm mệt mỏi',
                    productImage: './images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 3,
                    name: 'Nước Yến Nha Đam Đường Phèn',
                    productImage: './images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 4,
                    name: 'Nước Dưa Hấu Đường Phèn',
                    productImage: './images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 5,
                    name: 'Nước Yến Nha Đam Đường Phèn',
                    productImage: './images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
            ]
        },
        {
            id: 2,
            title: 'VEGAN SPORT',
            desc: 'Nhóm thực phẩm chức năng hỗ trợ bổ sung sức đề kháng và nhiều chất dinh dưỡng quan trọng, cần thiết cho cơ thể.',
            productItem: [
                {
                    id: 1,
                    name: 'Tinh Dầu Thuần Chay Thiên Nhiên',
                    productImage: './images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 2,
                    name: 'WELL KID PLUS (multi-vitamin liquid) hỗ trợ tăng cường đề kháng, giúp ăn ngon giảm mệt mỏi',
                    productImage: './images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 3,
                    name: 'Nước Yến Nha Đam Đường Phèn',
                    productImage: './images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 4,
                    name: 'Nước Dưa Hấu Đường Phèn',
                    productImage: './images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 5,
                    name: 'Nước Yến Nha Đam Đường Phèn',
                    productImage: './images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
            ]
        },
        {
            id: 3,
            title: 'NATURAL BEAUTY',
            desc: 'Thăng hạng vẻ đẹp thuần khiết từ những nguyên liệu thiên nhiên, gìn giữ sắc đẹp một cách bền vững, an toàn và hiệu quả.',
            productItem: [
                {
                    id: 1,
                    name: 'Tinh Dầu Thuần Chay Thiên Nhiên',
                    productImage: './images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 2,
                    name: 'WELL KID PLUS (multi-vitamin liquid) hỗ trợ tăng cường đề kháng, giúp ăn ngon giảm mệt mỏi',
                    productImage: './images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 3,
                    name: 'Nước Yến Nha Đam Đường Phèn',
                    productImage: './images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 4,
                    name: 'Nước Dưa Hấu Đường Phèn',
                    productImage: './images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 5,
                    name: 'Nước Yến Nha Đam Đường Phèn',
                    productImage: './images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
            ]
        },
    ];

    return (
        <section className={`overflow-x-hidden py-7`}>
            {groupProduct.map((item) => (
                <div className="pb-7 max-w-[1366px] m-auto flex flex-wrap md:flex-nowrap">
                    <div className={`mb-[25px] md:mb-0 w-full md:w-[43%] flex flex-col`}>
                        <div className={`w-full lg:ml-[15%] lg:max-w-[345px] mt-4 ml-[1em] w-[calc(100%-2em)]`}>
                            <h5 className={`mt-8 mb-5 text-xl font-bold uppercase md:mt-24`}>{item.title}</h5>
                            <p className={`mb-5 text-sm font-light line-clamp-3`}>{item.desc}</p>
                            <Link href={``} className={`btn__link`}>Tìm hiểu thêm</Link>
                        </div>
                    </div>
                    <div className={`w-full min-w-0 md:w-auto md:flex-1`}>
                        <Swiper
                            spaceBetween={spaceBetween}
                            loop={true}
                            centeredSlides={centeredSlides}
                            watchOverflow={true}
                            slidesPerView={slidesPerView}
                            autoplay={true}
                        >
                            {item.productItem.map((item) => (
                                <SwiperSlide key={`${item.id}`}>
                                    <ProductItem key={item.id} item={item}/>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProductFeatured;
