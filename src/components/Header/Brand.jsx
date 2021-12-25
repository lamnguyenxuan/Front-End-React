import { createRef, useEffect, useState } from "react";
import { Brands } from "../Data/BrandProducts";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { brand } from "../../slices/products.slice";
import { pick } from "../../slices/brandCheck.slice";

const Brand = () => {
    const [status, setStatus] = useState(false);
    // const toggleContainer = createRef();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     window.addEventListener('click', onClickOutsideHandler);
    //     return () => {
    //         window.removeEventListener('click', onClickOutsideHandler);
    //     }
    // }, [])

    // const onClickHandler = () => setStatus(!status);
    // const onClickOutsideHandler = (event) => {
    //     if (status && !toggleContainer.current.contains(event.target)) {
    //         setStatus(false);
    //     }
    // }

    return (
        <div className="brand-header">
            <button onClick={() => setStatus(!status)}><span><i className="fas fa-bars"></i></span><span>Danh mục sản phẩm</span></button>
            {/* <button onClick={onClickHandler}><span><i className="fas fa-bars"></i></span><span>Danh mục sản phẩm</span></button> */}

            {status && <div>
                <ul className="list-brand">
                    {
                        Brands.map((brand1, index) => {
                            return <li key={index} className="item-brand"><NavLink onClick={() => { setStatus(!status), dispatch(brand(brand1)), dispatch(pick(brand1)) }} to={"products/" + brand1}>{brand1}</NavLink></li>
                        })
                    }
                </ul>
            </div>}
        </div>
    )
}

export default Brand;