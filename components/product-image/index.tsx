import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { server } from "../../utils/server";
const ProductImage = ({imgSlide}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <Swiper
                spaceBetween={0}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
            >
              {imgSlide.map((item) => (
                  <SwiperSlide className={`!h-[500px] select-none`} key={item.id}>
                    <img src={`${server}/${item.src}`} className={`object-scale-down w-full h-full`}/>
                  </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={15}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mt-4 thumbs-slide-product"
            >
              {imgSlide.map((item) => (
                  <SwiperSlide className={`!h-[120px] select-none p-[10px] border-dashed border border-[#eaeaea]`} key={item.id}>
                    <img src={`${server}/${item.src}`} className={`object-scale-down w-full h-full`}/>
                  </SwiperSlide>
              ))}
            </Swiper>
        </div>
    )
}

export default ProductImage;