import { Container, Row, Col } from "react-bootstrap"
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from "react-redux";
import { removeItem, addItem, subItem } from "../../slices/cart.slice";

export default ({ id, image, title, price, quantity }) => {
    const dispatch = useDispatch();
    return (
        <div className="product-cart">
            <Container>
                <Row>
                    <Col xs={1} sm={1} lg={1}>
                        <div onClick={() => dispatch(removeItem(id))} className="close-cart">
                            <i className="fas fa-times"></i>
                        </div>
                    </Col>
                    <Col xs={3} sm={1} lg={1}>
                        <div className="image-cart">
                            <img src={image} alt="Ảnh lỗi" />
                        </div>
                    </Col>
                    <Col xs={8} sm={5} lg={6}>
                        <div className="content-cart">
                            <h5>{title}</h5>
                            {/* <div className="content-cart-extras">
                                <div className="content-cart-extra">
                                    <h6>Chọn phiên bản:&nbsp;&nbsp;</h6>
                                    <span>64GB</span>
                                </div>
                                <div className="content-cart-extra">
                                    <h6>Chọn màu:&nbsp;&nbsp;</h6>
                                    <span>Trắng</span>
                                </div>
                            </div> */}
                        </div>
                    </Col>
                    <Col xs={6} sm={2} lg={2}>
                        <div className="count-cart-item">
                            <input onClick={() => dispatch(subItem(id))} type="button" value={"-"} />
                            <input type="button" value={quantity} />
                            <input onClick={() => dispatch(addItem(id))} type="button" value={"+"} />
                        </div>
                    </Col>
                    <Col xs={6} sm={3} lg={2}>
                        <div className="count-cart-price">
                            <NumberFormat value={price * quantity} thousandSeparator={true} suffix=' VND' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}