import { Row, Col, Container } from "react-bootstrap"
import ProductsListSearch from "./ProductsListSearch"
import { useSelector, useDispatch } from "react-redux"
import { brand } from "../slices/products.slice"
import { Brands } from "./Data/BrandProducts"
import { pick } from "../slices/brandCheck.slice"
import { getByBrand } from "./Data/ProductsData"
import { useParams, NavLink } from "react-router-dom"

export default () => {
    const param = useParams();
    const getBrand = param.brand;
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products)
    const brandX = useSelector(state => state.brandCheck.brands)

    return (
        <div className="productsCategory">
            <Container>
                {/* <Row>
                    <div className="category-option">
                        <Col sm={3} xl={2}>
                            <div className="option-title">
                                Phiên Bản Điện Thoại
                            </div>
                        </Col>
                        <Col sm={9} xl={10}>
                            <div className="option-content">
                                <button>64GB</button>
                                <button>128GB</button>
                                <button>256GB</button>
                                <button>512GB</button>
                            </div>
                        </Col>
                    </div>
                </Row>

                <Row>
                    <div className="category-option">
                        <Col sm={3} xl={2}>
                            <div className="option-title">
                                Màu Sắc
                            </div>
                        </Col>
                        <Col sm={9} xl={10}>
                            <div className="option-content">
                                <button>Bạc</button>
                                <button>Hồng</button>
                                <button>Trắng</button>
                                <button>Vàng</button>
                                <button>Xanh navi</button>
                                <button>Xanh ngọc</button>
                                <button>Đen</button>
                                <button>Đỏ</button>
                            </div>
                        </Col>
                    </div>
                </Row> */}

                <Row>
                    <div className="category-option">
                        <Col xs={12} sm={3} xl={2}>
                            <div className="option-title">
                                Danh mục sản phẩm
                            </div>
                        </Col>
                        <Col xs={12} sm={9} xl={10}>
                            <div className="option-content">
                                {
                                    Brands.map((brand1, index) => {
                                        return <NavLink key={index} to={"/products/" + brand1}><button className={(getBrand != null && getBrand === brand1.toLowerCase()) ? "button-search-active" : (brandX === brand1 ? "button-search-active" : "")} onClick={() => { dispatch(pick(brand1)), dispatch(brand(brand1)) }}>{brand1}</button></NavLink>
                                    })
                                }
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
            <ProductsListSearch products={products} />
        </div>
    )
}