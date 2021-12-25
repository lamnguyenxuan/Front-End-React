import { useState } from "react"
// import logoExtra1 from "../../images/huawei1-extra.jpg"
// import logoExtra2 from "../images/huawei2-extra.jpg"
// import logoExtra3 from "../images/huawei3-extra.jpg"
// import logoExtra4 from "../images/huawei4-extra.jpg"
// import logoExtra5 from "../images/huawei5-extra.jpg"
// import logoH1 from "../images/huawei1.webp"
import { NavLink, useParams } from "react-router-dom"
import { getById } from "../Data/ProductsData";
import NumberFormat from 'react-number-format';
import { addItem } from "../../slices/cart.slice";
import { useDispatch } from "react-redux";

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
    const showMessage = (t) => {
        alert("Sản phẩm " + t + " đã được thêm thành công vào giỏ hàng")
    }
    const dispatch = useDispatch();
    const param = useParams();
    const id = param.id;
    const product = getById(id);
    const [status, setStatus] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="description-product">
            {showModal && <Modal hide={() => setShowModal(false)} />}
            <div className="description-top">
                <h3>Mô tả sản phẩm</h3>
                <h4>{product.title}</h4>
                <p>Hướng đến phân khúc tầm trung, {product.title} phiên bản 2019 là đại diện cho {product.brand} với thiết kế phù hợp xu thế hiện nay, kết hợp với khả năng chụp ảnh tốt và cấu hình mạnh mẽ cực kì tiết kiệm pin. Đem lại trải nghiệm di động mượt mà với mức giá cực kì hấp dẫn.</p>
                <img src={product.image} alt="Ảnh lỗi" />
            </div>
            {
                !status && <button className="hide-content" onClick={() => setStatus(!status)}>Đọc tiếp bài viết &nbsp;<i className="fa fa-angle-down"></i> </button>
            }
            {
                status && (
                    <div>
                        <div className="description-extra">
                            <h4>Thiết kế</h4>
                            <p>Điếm nhấn giúp Huawei P30 Lite nổi bật là thiết kế độc đáo thường xuất hiện trên các dòng điện thoại cao cấp. Sở hữu màn hình IPS 6.15″ với độ phân giải 1080 x 2340, đem lại chất lượng hình ảnh sắc nét và màu sắc chân thực, tuy nhiên điều đặc biệt hơn là dù có kích thước lớn như vậy nhưng cảm giác cầm Huawei P30 Lite lại rất vừa tay, nhờ vào thiết kế màn hình tràn viền giúp tăng diện tích hiển thị của màn hình lên tới 80%.</p>
                            <img src={product.image} alt="Ảnh lỗi" />
                        </div>
                        <div className="description-extra">
                            <h4>Hiệu năng</h4>
                            <p>Huawei P30 Lite được trang bị bộ xử lý 8 nhân Kirin 710 với tốc độ xử lý tốt, kết hợp với bộ nhớ RAM lên tới 6GB, đem lại trải nghiệm sử dụng mượt mà với tất cả các ứng dụng hàng ngày. Ngoài ra, điện thoại còn hỗ trợ thẻ nhớ SD với dung lượng lên tới 1TB, giúp thoải mái lưu trữ bất cứ thứ gì mà người dùng cần tới.</p>
                            <img src={product.image} alt="Ảnh lỗi" />
                        </div>
                        <div className="description-extra">
                            <h4>Camera</h4>
                            <p>Nắm được xu hướng chụp ảnh đang rất thịnh hành trong giới trẻ hiện nay, P30 Lite được Huawei thiết kế và tinh chỉnh chính xác cho nhu cầu này. Với hệ thống 3 camera ở phía sau gồm 1 camera chính 24MP với khẩu độ f/1.8 giúp lấy nét và thu sáng tốt hơn, trong khi camera phụ 2MP đảm nhiệm việc nhận diện chiều sâu và camera 8MP với góc chụp siêu rộng cho ngoại cảnh.</p>
                            <img src={product.image} alt="Ảnh lỗi" />
                        </div>
                        <div className="description-extra">
                            <h4>Thoải mái cho ngày dài năng động</h4>
                            <p>Với dung lượng pin lớn, lên tới 3340, kết hợp với bộ xử lý Kirin 710 cực kì tiết kiệm điện. Thoải mái cho một ngày dài sử dụng liên tục mà không cần phải lo cắm sạc, thậm chí máy còn tích hợp công nghệ sạc nhanh với công suất lên tới 18W.</p>
                            <img src={product.image} alt="Ảnh lỗi" />
                        </div>
                        <button className="hide-content" onClick={() => setStatus(!status)}>Thu gọn lại &nbsp;<i className="fa fa-angle-up"></i> </button>
                    </div>
                )
            }
            <div className="add-to-cart">
                <div className="logo-detail">
                    <img src={product.image} alt="" />
                </div>
                <div className="title-detail">
                    <h5>
                        {product.title}
                    </h5>
                    <NumberFormat value={product.newPrice} thousandSeparator={true} suffix=' VND' />
                </div>
                <div className="button-add-to-cart">
                    <button onClick={() => { dispatch(addItem(product.id)), setShowModal(true) }}>Thêm vào giỏ</button>
                </div>
            </div>
        </div>
    )
}