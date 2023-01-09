import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

let slidesPerView = 1;
let centeredSlides = true;
let spaceBetween = 30;
if (process.browser) {
  if (window.innerWidth > 768) {
    slidesPerView = 1;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if (window.innerWidth > 1024) {
    slidesPerView = 1;
    spaceBetween = 65;
    centeredSlides = false;
  }
}

const HomeSlider = ({ bannerTops }) => {
  const sliders = JSON.parse(bannerTops.value);
  // const sliders = [
  //   {
  //     id: 1,
  //     image: "./images/slide.png",
  //   },
  //   {
  //     id: 2,
  //     image: "./images/slide.png",
  //   },
  // ];

  return (
    <section className="slider-home">
      <Swiper
        spaceBetween={spaceBetween}
        loop={true}
        centeredSlides={centeredSlides}
        watchOverflow={true}
        slidesPerView={slidesPerView}
        className="swiper-wrapper"
      >
        {sliders.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={`http://localhost:9091/${item.image}`} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default HomeSlider;
