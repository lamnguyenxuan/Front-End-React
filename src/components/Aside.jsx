import Slider from "./Slider";
import News from "./News";
import { SliderData } from "./Data/SliderData";
import { Row, Col, Container } from "react-bootstrap";
import { NewsData } from "./Data/NewsData";
const Aside = () => {
    return (
        <div className="aside">
            <Container>
                <Row>
                    <Col xs={12} sm={8}>
                        <Slider slides={SliderData} />
                    </Col>
                    <Col xs={12} sm={4}>
                        <News news={NewsData}></News>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aside;