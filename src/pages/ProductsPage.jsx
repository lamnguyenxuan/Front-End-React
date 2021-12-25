import "../style/productsPage/productsPage.css";
import { NavLink } from "react-router-dom";
import BannerProducts from "../components/Category/BannerProducts";
import ProductsCategory from "../components/Category/ProductsCategory";

const ProductsPage = () => {
    return <div className="productsPages">
        <div className="productsPage">
            <BannerProducts />
            <ProductsCategory />
        </div>
    </div>
}

export default ProductsPage;