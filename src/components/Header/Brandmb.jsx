import { useState } from "react";
import { Brands } from "../Data/BrandProducts";
import { NavLink } from "react-router-dom";

const Brandmb = () => {
    const [status, setStatus] = useState(false);

    return (
        <div className="brand-mb hide">
            <div className="icon-brand-mb" onClick={() => setStatus(!status)}>
                <span><i className="fas fa-bars"></i></span>
            </div>
            {
                status && <div className="menu-brand-mb">
                    <ul className="list-brand-mb">
                        {
                            Brands.map((brand1, index) => {
                                return <li key={index} className="item-brand-mb"><NavLink onClick={() => setStatus(!status)} to={"products/" + brand1}>{brand1}</NavLink></li>
                            })
                        }
                    </ul>

                    <div className="close">
                        <button onClick={() => setStatus(!status)}>X</button>
                    </div>
                </div>
            }
        </div>
    )
}
export default Brandmb;