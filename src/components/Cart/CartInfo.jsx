import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { resetItem, selectTotalItems } from "../../slices/cart.slice";

const Modal = (props) => {
    return (
        <div className="modal-containerX">
            <div className="modalX">
                <i className="far fa-check-circle"></i>
                <p>Chúc mừng bạn đã thanh toán thành công</p>
                <button onClick={props.hide}>Close</button>
            </div>
        </div>
    )
}

export default () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const totalItem = selectTotalItems(useSelector(state => state))
    const [name, setName] = useState(false);
    const [phone, setPhone] = useState(false);
    const [address, setAddress] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        let nameX = document.getElementById("name");
        let phoneX = document.getElementById("phone");
        let addressX = document.getElementById("address");

        if (nameX.value.trim() == "" || phoneX.value.trim() == "" || addressX.value.trim() == "") {
            if (nameX.value.trim() == "") {
                setName(true);
            } else {
                setName(false);
            }
            if (phoneX.value.trim() == "") {
                setPhone(true)
            } else {
                setPhone(false);
            }
            if (addressX.value.trim() == "") {
                setAddress(true);
            } else {
                setAddress(false);
            }
        }
        else {
            setShowModal(true);
        }
    }
    return (
        <div className="cart-infos">
            {showModal && <Modal hide={() => { setShowModal(false), dispatch(resetItem()) }} />}
            <button>THông tin thanh toán</button>
            <div className="cart-info">
                <form onSubmit={handleSubmit}>
                    <div className="name-info">
                        <span><label htmlFor="name">Họ tên:</label></span>
                        <input type="text" id="name" name="name" />
                        {name && <p>Vui lòng nhập họ tên</p>}
                    </div>
                    <div className="phone-info">
                        <span><label htmlFor="phone">Số điện thoại:</label></span>
                        <input type="text" id="phone" name="phone" />
                        {phone && <p>Vui lòng nhập số điện thoại</p>}
                    </div>
                    <div className="address-info">
                        <span><label htmlFor="address">Địa chỉ</label></span>
                        <input type="text" name="address" id="address" />
                        {address && <p>Vui lòng nhập địa chỉ</p>}
                    </div>
                    <div className="time-info">
                        <span><label htmlFor="time">Thời gian nhận hàng</label></span>
                        <select id="time" name="time">
                            <option value="9h-12h" defaultValue>9h-12h</option>
                            <option value="13h-15h">12h-15h</option>
                            <option value="7h-9h">7h-9h</option>
                            <option value="19h-21h">19h-21h</option>
                        </select>
                    </div>
                    <div className="note-info">
                        <span><label htmlFor="note">Ghi chú về đơn hàng (Tùy chọn)</label></span>
                        <textarea placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn" name="note" id="note" cols="30" rows="4"></textarea>
                    </div>
                    <button type="submit">Hoàn tất đơn hàng</button>
                </form>
            </div>
        </div>
    )
}