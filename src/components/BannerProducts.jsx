import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { sortX } from "../slices/sort.slice"
import { NavLink, useParams } from "react-router-dom"
import { getById, getByBrand } from "./Data/ProductsData";
import { getByBrandX } from "./Data/BrandProducts";
import { all } from "../slices/products.slice";
import { rsBrand } from "../slices/brandCheck.slice";

export default () => {
    const param = useParams();
    const id = param.id;
    const product = getById(id);
    const brand = param.brand;
    const dispatch = useDispatch();
    const [sort, setSort] = useState("asc");

    return (
        <div className="banner-products">
            <div className="banner-product">
                <span className="banner-products-item">
                    <NavLink onClick={() => { dispatch(all()), dispatch(rsBrand()) }} to="/products">Sản phẩm</NavLink>
                </span>
                {
                    (id != null || (brand != null && getByBrandX(brand) != null)) && (
                        <>
                            <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                            <span className="banner-products-item">
                                <NavLink to="#">{brand}</NavLink>
                            </span>
                        </>
                    )
                }
            </div>
            <div className="sort-product">
                <form>
                    <select value={sort} onChange={(e) => { setSort(e.target.value), dispatch(sortX(e.target.value)) }}>
                        {/* <option value="new">Mới nhất</option>
                        <option value="hot">Phổ biến</option> */}
                        <option value="asc">Giá (thấp-cao)</option>
                        <option value="desc">Giá (cao-thấp)</option>
                    </select>
                </form>
            </div>
        </div>
    )
}