import Logo from "./Logo";
import Brand from "./Brand";
import Search from "./Search";
import User from "./User";
import Cart from "./Cart";
import Brandmb from "./Brandmb";
import { useState } from "react";

const Menu = () => {
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
        <div className={navBar ? "menus menu-active" : "menus"}>
            <div className="menu">
                <Brandmb />
                <Logo />
                <Brand />
                <Search />
                <User />
                <Cart />
            </div>
        </div>
    )
}

export default Menu;