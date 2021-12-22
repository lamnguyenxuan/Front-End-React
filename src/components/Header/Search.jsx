import { useDispatch, useSelector } from "react-redux";
import { search } from "../../slices/search.slice";
import NumberFormat from 'react-number-format';
import { NavLink } from "react-router-dom";
import { useState } from "react";


const Search = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.search.products)
    const [status, setStatus] = useState(false);

    return (
        <div className="search">
            <div>
                <div>
                    <input onKeyUp={(e) => { dispatch(search((e.target.value).toLowerCase())), e.target.value.length > 0 ? setStatus(true) : setStatus(false) }} type="search" placeholder="Hôm nay bạn muốn mua gì.?" />
                </div>
                <div>
                    <button>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
            {
                status && (<ul className="search-list-item">
                    {
                        products.length > 0 ? (products.map((product, index) => {
                            return (<li key={index} className="search-item">
                                <div className="search-item-logo">
                                    <NavLink onClick={() => setStatus(false)} to={"product/" + product.id}><img src={product.image} alt="" /></NavLink>
                                </div>
                                <div className="search-item-title">
                                    <NavLink onClick={() => setStatus(false)} to={"product/" + product.id}>{product.title}</NavLink>
                                </div>
                                <div className="search-item-price">
                                    <NumberFormat value={product.newPrice} thousandSeparator={true} suffix=' VND' />
                                </div>
                            </li>)
                        })) : <li className="item-not-found">Không tìm thấy sản phẩm nào.</li>
                    }
                </ul>)
            }
        </div>
    )
}

export default Search;