import { NavLink, useParams } from "react-router-dom"
import { getById } from "./Data/ProductsData";
import NumberFormat from 'react-number-format';
import { useDispatch } from "react-redux";
import { addItem } from "../slices/cart.slice";
import { useState } from "react";

const Modal = (props) => {
    return (
        <div className="modal-containerX">
            <div className="modalX">
                <i className="far fa-check-circle"></i>
                <p>Bạn đã thêm sản phẩm vào giỏ hàng thành công</p>
                <button onClick={props.hide}>OK</button>
            </div>
        </div>
    )
}

export default () => {
    const dispatch = useDispatch();
    const param = useParams();
    const id = param.id;
    const product = getById(id);

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="product-mini-infos">
            {showModal && <Modal hide={() => setShowModal(false)} />}
            <div className="product-mini-info">
                <h3>
                    {product.title}
                </h3>
                <h5>
                    <NumberFormat value={product.newPrice} thousandSeparator={true} suffix=' VND' />
                </h5>
            </div>
            <div className="button-pay">
                <button onClick={() => { dispatch(addItem(product.id)), setShowModal(true) }}>Thêm vào giỏ</button>
                <button>Mua ngay</button>
                <button>
                    <h6>Trả góp 0%</h6>
                    <p>Duyệt nhanh qua điện thoại</p>
                </button>
                <button>
                    <h6>Trả góp qua thẻ</h6>
                    <p>Visa, Master Card, JCB</p>
                </button>
            </div>
            <div className="sale">
                <h6>Khuyến mãi liên quan</h6>
                <ul>
                    <li>Tặng thẻ giảm giá tối đa 1.000.000đ cho sản phẩm sau</li>
                    <li>Giảm giá khi mua tại cửa hàng</li>
                    <li>Mua Đồng hồ thời trang giảm 40% (không kèm khuyến mãi khác)</li>
                </ul>
            </div>
        </div>
    )
}