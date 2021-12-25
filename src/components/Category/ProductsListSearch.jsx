import ProductListSearch from "./ProductListSearch";
import { ProductsData } from "../Data/ProductsData";
import { useSelector, useDispatch } from "react-redux"
import { getByBrand } from "../Data/ProductsData"
import { useParams, NavLink } from "react-router-dom"
import { sortX } from "../../slices/sort.slice";

export default ({ products }) => {
    const param = useParams();
    const getBrand = param.brand;
    let products0 = useSelector(state => state.sortX.products);
    products0 = products0.filter(p => products.includes(p))
    if (getBrand != null) {
        let productsByBrand = getByBrand(getBrand.toLowerCase())
        products0 = products0.filter(p => productsByBrand.includes(p))
    }
    return (
        <div className="products-list-search">
            <div className="search-lists">
                <div className="search-list">
                    {
                        products0.map((product, index) => {
                            return <ProductListSearch key={index} id={product.id} image={product.image} title={product.title} newPrice={product.newPrice} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}