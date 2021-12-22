import Aside from "../components/Aside";
import SliderProducts from "../components/SliderProducts";
import BrandProducts from "../components/BrandProducts";
import "../style/home/home.css"
import Extra1 from "../components/Extra1";
import IphoneHot from "../components/IphoneHot";
import Extra2 from "../components/Extra2";
import LThot from "../components/LThot";
import Enter from "../components/Enter";

const HomePage = () => {
    return (
        <div className="home">
            <Aside />
            <SliderProducts />
            <BrandProducts />
            <Extra1 />
            <IphoneHot />
            <Extra2 />
            <LThot />
            <Enter />
        </div>
    )
}

export default HomePage;