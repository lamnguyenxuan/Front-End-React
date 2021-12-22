import { Row, Col, Container } from "react-bootstrap";

export default (prop) => {
    return (
        <Row>
            <Col xs={5} sm={5}>
                <img src={prop.item.image} alt="Ảnh lỗi" />
            </Col>
            <Col xs={7} sm={7}>
                <h5>
                    {prop.item.title}
                </h5>
                <p>
                    {prop.item.content}
                </p>
            </Col>
        </Row>
    )
}