import { Row, Col, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default (prop) => {
    return (
        <Row>
            <Col xs={5} sm={5}>
                <NavLink to={"#"}>
                    <img src={prop.item.image} alt="Ảnh lỗi" />
                </NavLink>
            </Col>
            <Col xs={7} sm={7}>
                <NavLink to={"#"}>
                    <h5>
                        {prop.item.title}
                    </h5>
                </NavLink>
                <p>
                    {prop.item.content}
                </p>
            </Col>
        </Row>
    )
}