import NumberFormat from 'react-number-format';
import { NavLink } from 'react-router-dom';

export default ({ image, title, newPrice, id }) => {
    return (
        <div className="ltItem">
            <div className='logoLT'>
                <NavLink to={"/product/" + id}><img src={image} alt="Ảnh lỗi" /></NavLink>
            </div>
            <div className="titleLT">
                <NavLink to={"/product/" + id}>{title}</NavLink>
            </div>
            <div className="priceLT">
                <NumberFormat value={newPrice} thousandSeparator={true} suffix=' VND' />
            </div>
        </div>
    )
}