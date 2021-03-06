import "../style/singleProduct/singleProduct.css"
import { NavLink } from "react-router-dom";
import Banner from "../components/Product/Banner";
import ProductMiniSlider from "../components/Product/ProductMiniSlider";
import { Container, Row, Col } from "react-bootstrap";
import ProductMiniInfo from "../components/Product/ProductMiniInfo";
import ProductMiniExtra from "../components/Product/ProductMiniExtra";
import Enter from "../components/Utilities/Enter";
import DescriptionProduct from "../components/Product/DescriptionProduct";
import DetailProduct from "../components/Product/DetailProduct";
import News from "../components/Home/Aside/News/News";

const SingleProductPage = () => {
    return (
        <div className="single-products">
            <div className="single-product">
                <Banner />
                <Container>
                    <Row>
                        <Col xs={12} md={9}>
                            <div className="single-product-left">
                                <Row>
                                    <Col xs={12} sm={5} md={5}><ProductMiniSlider /></Col>
                                    <Col xs={12} sm={7} md={7}><ProductMiniInfo /></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <div className="single-product-right">
                                <Row>
                                    <Col md={12}><ProductMiniExtra /></Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={8}>
                            <DescriptionProduct />
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <DetailProduct />
                            <p>&nbsp;</p>
                            <News />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Enter />
        </div>
    )
}

export default SingleProductPage;