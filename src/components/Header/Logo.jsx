import logoShop from "../../images/logoShop.png.webp"
import { NavLink } from "react-router-dom";

const Logo = () => {
    return (
        <div className="logo-header">
            <NavLink to=""><img src={logoShop} alt="Ảnh bị lỗi" /></NavLink>
        </div>
    )
}

export default Logo;