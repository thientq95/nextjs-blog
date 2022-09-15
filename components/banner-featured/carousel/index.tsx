import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerItem from "../../banner-item";

let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (process.browser) {
  if (window.innerWidth > 768) {
    slidesPerView = 3;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if (window.innerWidth > 1024) {
    slidesPerView = 2;
    spaceBetween = 65;
    centeredSlides = false;
  }
}

const BannerCarousel = ({ banners }) => {
  return (
    <div className="banner-slider">
      <Swiper
        spaceBetween={spaceBetween}
        loop={true}
        centeredSlides={centeredSlides}
        watchOverflow={true}
        slidesPerView={slidesPerView}
        className="swiper-wrapper"
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id}>
            <BannerItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
