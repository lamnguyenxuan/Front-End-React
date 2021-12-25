import logoIphone from '../../images/iphone.jpg.webp'
import logoSamsung from '../../images/samsung.jpg.webp'
import logoOppo from '../../images/oppo.png.webp'
import logoHuawei from '../../images/huawei.jpg.webp'
import logoXiaomi from '../../images/xiaomi.webp'
import logoRealme from '../../images/realme.jpg.webp'
import { NavLink } from 'react-router-dom'
export default () => {
    return (
        <div className="brandProducts" >
            <div className="brandLists">
                <h3>Thương hiệu nổi bật</h3>
                <div className='brandList'>
                    <div className="brandItem">
                        <NavLink to={"/products/iphone"}>
                            <div className='logoBrand'>
                                <img src={logoIphone} alt="Ảnh lỗi" />
                            </div>
                        </NavLink>
                        <NavLink to={"/products/iphone"}><h5>IPHONE</h5></NavLink>
                    </div>
                    <div className="brandItem">
                        <NavLink to={"/products/samsung"}>
                            <div className='logoBrand'>
                                <img src={logoSamsung} alt="Ảnh lỗi" />
                            </div>
                        </NavLink>
                        <NavLink to={"/products/samsung"}><h5>SAMSUNG</h5></NavLink>
                    </div>
                    <div className="brandItem">
                        <NavLink to={"/products/oppo"}>
                            <div className='logoBrand'>
                                <img src={logoOppo} alt="Ảnh lỗi" />
                            </div>
                        </NavLink>
                        <NavLink to={"/products/oppo"}><h5>OPPO</h5></NavLink>
                    </div>
                    <div className="brandItem">
                        <NavLink to={"/products/huawei"}>
                            <div className='logoBrand'>
                                <img src={logoHuawei} alt="Ảnh lỗi" />
                            </div>
                        </NavLink>
                        <NavLink to={"/products/huawei"}><h5>HUAWEI</h5></NavLink>
                    </div>
                    <div className="brandItem">
                        <NavLink to={"/products/xiaomi"}>
                            <div className='logoBrand'>
                                <img src={logoXiaomi} alt="Ảnh lỗi" />
                            </div>
                        </NavLink>
                        <NavLink to={"/products/xiaomi"}><h5>XIAOMI</h5></NavLink>
                    </div>
                    <div className="brandItem">
                        <NavLink to={"/products/realme"}>
                            <div className='logoBrand'>
                                <img src={logoRealme} alt="Ảnh lỗi" />
                            </div>
                        </NavLink>
                        <NavLink to={"/products/realme"}><h5>REALME</h5></NavLink>
                    </div>
                </div>
            </div>
        </div >
    )
}