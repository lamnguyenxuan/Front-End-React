import { NavLink, useParams } from "react-router-dom"
import { getById } from "../Data/ProductsData";

export default () => {
    const param = useParams();
    const id = param.id;
    const product = getById(id);
    return (
        <div className="banner">
            <span className="banner-item">
                <NavLink to="/products">Sản phẩm</NavLink>
            </span>
            <span>/</span>
            <span className="banner-item">
                <NavLink to={"/products/" + product.brand}>{product.brand}</NavLink>
            </span>
        </div>
    )
}