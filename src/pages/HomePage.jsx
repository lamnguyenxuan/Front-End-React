import Aside from "../components/Home/Aside/Aside";
import SliderProducts from "../components/Home/SliderProducts";
import BrandProducts from "../components/Home/BrandProducts";
import "../style/home/home.css"
import Extra1 from "../components/Home/Extra1";
import IphoneHot from "../components/Home/IphoneHome/IphoneHot";
import Extra2 from "../components/Home/Extra2";
import LThot from "../components/Home/LaptopTabletHome/LThot";
import Enter from "../components/Utilities/Enter";

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