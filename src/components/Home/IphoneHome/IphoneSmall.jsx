import NumberFormat from 'react-number-format';
import { NavLink } from 'react-router-dom';

export default ({ image, title, newPrice, id }) => {
    return (
        <div className="iphoneItem">
            <div className='logoIphone'>
                <NavLink to={"/product/" + id}> <img src={image} alt="Ảnh lỗi" /></NavLink>
            </div>
            <div className="titleIphone">
                <NavLink to={"/product/" + id}>{title}</NavLink>
            </div>
            <div className="priceIphone">
                <NumberFormat value={newPrice} thousandSeparator={true} suffix=' VND' />
            </div>
        </div>
    )
}