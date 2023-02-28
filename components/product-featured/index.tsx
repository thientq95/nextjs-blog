import ProductItem from "../product-item";
import Link from "next/link";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperType, Pagination, Navigation} from "swiper";
import {useRef} from 'react';

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
                    productImage: '/images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 2,
                    name: 'WELL KID PLUS (multi-vitamin liquid) hỗ trợ tăng cường đề kháng, giúp ăn ngon giảm mệt mỏi',
                    productImage: '/images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 3,
                    name: 'Nước Yến Nha Đam Đường Phèn',
                    productImage: '/images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 4,
                    name: 'Nước Dưa Hấu Đường Phèn',
                    productImage: '/images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 5,
                    name: 'Nước Yến Nha Đam Đường Phèn',
                    productImage: '/images/product.webp',
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
                    productImage: '/images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 2,
                    name: 'WELL KID PLUS (multi-vitamin liquid) hỗ trợ tăng cường đề kháng, giúp ăn ngon giảm mệt mỏi',
                    productImage: '/images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 3,
                    name: 'Nước Yến Nha Đam Đường Phèn',
                    productImage: '/images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 4,
                    name: 'Nước Dưa Hấu Đường Phèn',
                    productImage: '/images/product.webp',
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
                    productImage: '/images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 2,
                    name: 'WELL KID PLUS (multi-vitamin liquid) hỗ trợ tăng cường đề kháng, giúp ăn ngon giảm mệt mỏi',
                    productImage: '/images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 3,
                    name: 'Nước Yến Nha Đam Đường Phèn',
                    productImage: '/images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 4,
                    name: 'Nước Dưa Hấu Đường Phèn',
                    productImage: '/images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
                {
                    id: 5,
                    name: 'Nước Yến Nha Đam Đường Phèn',
                    productImage: '/images/product.webp',
                    category: 'Natural beauty',
                    priceNew: '79.000',
                    priceOld: '99.000',
                },
            ]
        },
    ];
    const swiperRef = useRef<SwiperType>();
    return (

        <section className={`overflow-x-hidden py-7`}>
            {groupProduct.map((item) => (
                <div key={item.id}
                    className="pb-7 max-w-[1366px] container m-auto flex flex-wrap md:flex-nowrap even:flex-row-reverse">
                    <div className={`mb-[25px] md:mb-0 w-full md:w-[43%] flex flex-col`}>
                        <div className={`w-full lg:ml-[15%] lg:max-w-[345px] mt-4 w-[calc(100%-2em)]`}>
                            <h5 className={`mt-8 mb-5 text-xl font-bold uppercase md:mt-24`}>{item.title}</h5>
                            <p className={`mb-5 text-sm font-light line-clamp-3`}>{item.desc}</p>
                            <Link href={`/products`} className={`btn__link`}>Tìm hiểu thêm</Link>
                        </div>
                        <div
                            className={`relative border-b border-[#845536] border-opacity-20 flex items-end justify-between lg:ml-[15%] lg:max-w-[345px] mt-4 w-[calc(100%-2em)] pb-4`}>
                            <div
                                className={`absolute -bottom-[1px] left-0 w-[114px] h-[1px] bg-gradient-to-r from-[#B78260] to-[#815030]`}></div>
                            <div className={`swiper-pagination w-full text-[#815030]`}>
                                <span className={`text-[1.25rem] font-bold`}>1</span>
                                <span className={`mx-2`}>/</span>
                                <span className={`text-[1rem]`}>{item.productItem.length}</span>
                            </div>
                            <div className={`product-swiper-prev`} onClick={() => swiperRef.current?.slidePrev()}>
                                <i className={`fa-solid fa-arrow-left-long text-[#845536] text-[22px]`}></i>
                            </div>
                            <div className={`product-swiper-next ml-3`} onClick={() => swiperRef.current?.slideNext()}>
                                <i className={`fa-solid fa-arrow-right-long text-[#845536] text-[22px]`}></i>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full min-w-0 md:w-auto md:flex-1`}>
                        <Swiper
                            spaceBetween={15}
                            loop={true}
                            centeredSlides={true}
                            watchOverflow={true}
                            slidesPerView={3}
                            autoplay={true}
                            // pagination={{
                            //     type: "fraction",
                            // }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {item.productItem.map((productItem) => (
                                <SwiperSlide key={`${productItem.id}`}>
                                    <ProductItem item={productItem}/>
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
