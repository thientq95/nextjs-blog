import "swiper/css";
import {Swiper, SwiperSlide} from 'swiper/react';
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

let slidesPerView = 1;
let centeredSlides = true;
let spaceBetween = 0;
// if (process.browser) {
//     if (window.innerWidth > 768) {
//         slidesPerView = 1;
//         spaceBetween = 35;
//         centeredSlides = false;
//     }
//     if (window.innerWidth > 1024) {
//         slidesPerView = 1;
//         spaceBetween = 65;
//         centeredSlides = false;
//     }
// }

const HomeSlider = () => {
    const { configs } = useSelector((state: RootState)  => state.config);

    const bannerTopObj = configs.find(m => m.key === 'C22_BANNER_TOP')?.value;
    const bannerTops =  bannerTopObj ?  JSON.parse(bannerTopObj) : [];
    const sliders = [
        {
            id: 1,
            image: "/images/slide1.webp",
            title: "EXTRA BLOOD SUPPORT",
            subTitle: "Vegan Vitamin Supplement",
            desc: "Cải thiện tình trạng thiếu máu, giữ ổn định chỉ số đường huyết và phòng ngừa sự thiếu hụt máu cho cơ thể"
        },
        {
            id: 2,
            image: "/images/slide2.webp",
            title: "EXTRA BLOOD SUPPORT",
            subTitle: "Vegan Vitamin Supplement",
            desc: "Cải thiện tình trạng thiếu máu, giữ ổn định chỉ số đường huyết và phòng ngừa sự thiếu hụt máu cho cơ thể"
        },
    ];

    return (
        <section className="slider overflow-x-hidden bg-gradient-to-r from-[#fde8cf] via-[#fedec2] to-[#fee9d0] z-10">
            <div className="container">
                <Swiper
                    spaceBetween={spaceBetween}
                    loop={true}
                    centeredSlides={centeredSlides}
                    watchOverflow={true}
                    slidesPerView={slidesPerView}
                    autoplay={true}
                    className="slider-content-swiper"
                >
                    {bannerTops.map((item, idx) => (
                        <SwiperSlide key={`${idx}`}>
                            <div
                                className="flex flex-wrap md:flex-nowrap justify-between items-center pb-[30px] md:pb-0 pt-10 md:pt-0">
                                <div className="slider-image mb-8 md:mb-0 w-full flex-shrink-0 md:w-[52%]">
                                    <Link href={`/${item.link}`}>
                                        <figure className="mb-0">
                                            <img src={`http://localhost:9091/${item.image}`}
                                                 alt={`${item.title}`} width="660" height="485"/></figure>
                                    </Link>
                                </div>
                                <div className="min-w-0 md:flex-1 slider-content md:ml-10">
                                    <div className="pb-[2px] slider-content-item">
                                        {/* <p className="text-3xl leading-snug xl:text-2xl mb-3 text-[#845536] ">
                                            {`${item.title}`}
                                        </p> */}
                                        <h5 className="font-bold text-3xl xl:text-[40px] text-primary leading-tight">
                                            {`${item.title}`}
                                        </h5>
                                        <p className="text-[16px] mb-5 text-[#052F1B] line-clamp-6 md:line-clamp-2">
                                            {`${item.description}`}
                                        </p>
                                        <Link href={`/${item.link}`} target="_blank" className={`btn__link`}>Tìm hiểu thêm</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default HomeSlider;
