import { Swiper, SwiperSlide } from "swiper/react";
import NumberFormat from 'react-number-format';

import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import "../../style/products/products.css"
import { ProductsData } from "../Data/ProductsData";

import SwiperCore, {
    Pagination, Navigation
} from 'swiper';
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const useWindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
    }, [])
    return width;
}

export default () => {
    const curWidth = useWindowSize();
    return (
        <div className="productsSlide">
            <h3>Sản phẩm bán chạy</h3>
            <Swiper slidesPerView={curWidth > 1200 ? 5 : (curWidth > 970 ? 4 : (curWidth > 705 ? 3 : (curWidth > 505 ? 2 : 1)))} spaceBetween={curWidth > 705 ? 30 : 15} slidesPerGroup={curWidth > 1200 ? 5 : (curWidth > 970 ? 4 : (curWidth > 705 ? 3 : (curWidth > 505 ? 2 : 1)))} loop={true} loopFillGroupWithBlank={true} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                {
                    ProductsData.map((product, index) => {
                        return (product.hot &&
                            <SwiperSlide key={index}>
                                <div>
                                    <NavLink to={"/product/" + product.id}> <img src={product.image} alt={product.title} /></NavLink>
                                    <NavLink to={"/product/" + product.id}> <h4>{product.title}</h4></NavLink>
                                    <h5>
                                        <NumberFormat value={product.newPrice} thousandSeparator={true} suffix=' VND' />
                                    </h5>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}