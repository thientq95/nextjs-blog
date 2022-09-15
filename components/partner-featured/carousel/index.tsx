import { Swiper, SwiperSlide } from "swiper/react";
import PartnerItem from "../../partner-item";

import 'swiper/css';

let slidesPerView = 5;
let centeredSlides = true;
let spaceBetween = 30;
if (process.browser) {
  if (window.innerWidth > 768) {
    slidesPerView = 3;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if (window.innerWidth > 1024) {
    slidesPerView = 6;
    spaceBetween = 65;
    centeredSlides = false;
  }
}

const PartnerCarousel = ({ partners }) => {
  return (
    <div className="supplier-slide">
      <Swiper
        spaceBetween={spaceBetween}
        loop={true}
        centeredSlides={centeredSlides}
        watchOverflow={true}
        slidesPerView={slidesPerView}
        navigation={true}
        className="swiper-wrapper"
      >
        {partners.map((item) => (
          <SwiperSlide key={item.id}>
            <PartnerItem image={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnerCarousel;
