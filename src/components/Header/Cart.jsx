import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectTotalItems } from "../../slices/cart.slice";

const Cart = () => {
    const totalItem = selectTotalItems(useSelector(state => state))
    return (
        <div className="cart-logo">
            <NavLink to={"cart"}>
                <i className="fas fa-shopping-cart"></i>
                {
                    totalItem > 0 && <span className="total-item">{totalItem}</span>
                }
            </NavLink>
        </div>
    )
}

export default Cart;