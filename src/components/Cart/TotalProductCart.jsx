import { useSelector } from "react-redux";
import { selectTotalItems, selectTotalPrice } from "../../slices/cart.slice";
import NumberFormat from 'react-number-format';

export default () => {
    const totalItem = selectTotalItems(useSelector(state => state))
    const totalPrice = selectTotalPrice(useSelector(state => state))
    return (
        <div className="total-cart">
            <h5>Cộng giỏ hàng</h5>
            <div className="count-total">
                <h6>Số lượng</h6>
                <span>{totalItem}</span>
            </div>
            <div className="sum-total">
                <h6>Tổng tiền</h6>
                <span><NumberFormat value={totalPrice} thousandSeparator={true} suffix=' VND' /></span>
            </div>
        </div>
    )
}