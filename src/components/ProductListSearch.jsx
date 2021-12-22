import NumberFormat from 'react-number-format';
import { NavLink } from 'react-router-dom';
import { addItem, selectTotalItems } from "../slices/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

const Modal = (props) => {
    const totalItem = selectTotalItems(useSelector(state => state))
    return (
        <div className="modal-containerX">
            <div className="modalX">
                <i className="far fa-check-circle"></i>
                <p>Bạn đã thêm sản phẩm vào giỏ hàng thành công</p>
                <button onClick={props.hide}>Tiếp tục mua hàng</button>
                <NavLink to={"/cart"}>{"Giỏ hàng (" + totalItem + " item)"}</NavLink>
            </div>
        </div>
    )
}

export default ({ image, title, newPrice, id }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="searchItem">
            {showModal && <Modal hide={() => setShowModal(false)} />}
            <div className='logoSearchItem'>
                <NavLink to={"/product/" + id} ><img src={image} alt="Ảnh lỗi" /></NavLink>
            </div>
            <div className="titleSearchItem">
                <NavLink to={"/product/" + id}>{title}</NavLink>
            </div>
            <div className="priceSearchItem">
                <NumberFormat value={newPrice} thousandSeparator={true} suffix=' VND' />
            </div>
            <div className='button-cartX'>
                <button onClick={() => { dispatch(addItem(id)), setShowModal(true) }}>Thêm vào giỏ</button>
            </div>
        </div>
    )
}