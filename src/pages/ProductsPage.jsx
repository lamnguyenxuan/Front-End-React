import "../style/productsPage/productsPage.css";
import { NavLink } from "react-router-dom";
import BannerProducts from "../components/BannerProducts";
import ProductsCategory from "../components/ProductsCategory";

const ProductsPage = () => {
    return <div className="productsPages">
        <div className="productsPage">
            <BannerProducts />
            <ProductsCategory />
        </div>
    </div>
}

export default ProductsPage;