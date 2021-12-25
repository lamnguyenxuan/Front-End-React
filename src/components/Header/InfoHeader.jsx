import logoHeadphone from "../../images/headphone.png.webp"
import logoNews from "../../images/news.png.webp"
import logoSettings from "../../images/settings.png.webp"

const InfoHeader = () => {
    return (
        <div className="info-header">
            <ul className="info-menu">
                <li className="info-item">
                    <img src={logoHeadphone} alt="Ảnh bị lỗi" />
                    <span>Tư vấn mua hàng: 1800 6867</span>
                </li>
                <li className="info-item">
                    <img src={logoHeadphone} alt="Ảnh bị lỗi" />
                    <span>CSKH: 1800 6865</span>
                </li>
                <li className="info-item">
                    <img src={logoNews} alt="Ảnh bị lỗi" />
                    <span>Tin tức công nghệ</span>
                </li>
                <li className="info-item">
                    <img src={logoSettings} alt="Ảnh bị lỗi" />
                    <span>Xây dựng cấu hình</span>
                </li>
            </ul>
        </div>
    )
}

export default InfoHeader;