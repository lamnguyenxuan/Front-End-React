import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import { Swiper, SwiperSlide } from "swiper/react";
// import logoH1 from "../images/huawei1.webp"
// import logoH2 from "../images/huawei2.webp"
// import logoH3 from "../images/huawei3.webp"
import { getById } from "../Data/ProductsData";

import SwiperCore, {
    FreeMode, Navigation, Thumbs
} from 'swiper';
import { useState } from "react";
import { useParams } from "react-router-dom";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

export default () => {
    const param = useParams();
    const id = param.id;
    const product = getById(id);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="product-mini-slider">
            <Swiper style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
                <SwiperSlide><img src={product.image} /></SwiperSlide><SwiperSlide><img src={product.image} /></SwiperSlide><SwiperSlide><img src={product.image} /></SwiperSlide>
            </Swiper>
            <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={3} freeMode={true} watchSlidesProgress={true} className="mySwiper">
                <SwiperSlide><img src={product.image} /></SwiperSlide><SwiperSlide><img src={product.image} /></SwiperSlide><SwiperSlide><img src={product.image} /></SwiperSlide>
            </Swiper>
        </div>
    )
}