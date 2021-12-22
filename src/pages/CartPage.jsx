import ProductCart from '../components/ProductCart';
import '../style/cart/cart.css'
import { Container, Row, Col } from 'react-bootstrap';
import TotalProductCart from '../components/TotalProductCart';
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom';
import { selectTotalItems } from "../slices/cart.slice";
import { rsBrand } from "../slices/brandCheck.slice";
import { all } from '../slices/products.slice';
import CartInfo from '../components/CartInfo';

const CartPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart);
    const totalItem = selectTotalItems(useSelector(state => state))
    return (
        <div className='cartPages'>
            <div className='cartPage'>
                <div className='button-cart'>
                    <NavLink onClick={() => { dispatch(all()), dispatch(rsBrand()) }} to={"/products"}><button>← Tiếp tục mua hàng</button></NavLink>
                </div>
                {
                    totalItem > 0 ? (<Container>
                        <Row>
                            <Col xs={9}>
                                <div className='products-cart'>
                                    {
                                        products.map((product, index) => {
                                            return <ProductCart key={index} id={product.id} image={product.image} title={product.title} price={product.newPrice} quantity={product.quantity} />
                                        })
                                    }
                                </div>
                            </Col>
                            <Col xs={3}>
                                <TotalProductCart />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CartInfo />
                            </Col>
                        </Row>
                    </Container>) : <div className='no-cart'>Không có sản phẩm nào được chọn</div>
                }
            </div>
        </div>
    )
}

export default CartPage;