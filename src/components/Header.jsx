import InfoHeader from "./InfoHeader";
import '../style/header/header.css'
import Menu from "./Header/Menu";
import { useState } from "react";

const Header = () => {
    const [navBar, setNavbar] = useState(false);
    const changeNavBar = () => {
        if (window.scrollY > 0) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeNavBar);
    return (
        <div>
            {
                !navBar && <InfoHeader />
            }
            <Menu />
        </div>
    )
}

export default Header;