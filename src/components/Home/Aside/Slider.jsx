import { useState, useRef } from "react";
import { SliderData } from "../../Data/SliderData";
// import slide1 from "../images/slide1.webp"
// import slide2 from "../images/slide2.webp"
// import slide3 from "../images/slide3.webp"
// import slide4 from "../images/slide4.webp"
// import slide5 from "../images/slide5.webp"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import "../../../style/slider/slider.css"
import SwiperCore, {
    FreeMode, Navigation, Thumbs
} from 'swiper';

SwiperCore.use([FreeMode, Navigation, Thumbs]);

const Slider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="sliders">
            <Swiper style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
                {
                    SliderData.map((slide, index) => {
                        return <SwiperSlide key={index}><img src={slide.image} /></SwiperSlide>
                    })
                }
            </Swiper>
            <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper">
                {
                    SliderData.map((slide, index) => {
                        return <SwiperSlide key={index}>{<img src={slide.image} />}</SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    );
}

export default Slider;