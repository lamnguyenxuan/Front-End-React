import NewsSmall from "./NewsSmall";
import { NewsData } from "../../../Data/NewsData";
import { NavLink } from "react-router-dom";
const News = () => {
    return (
        <div className="news">
            <h4><NavLink to={"#"}>TIN CÔNG NGHỆ NỔI BẬT</NavLink></h4>
            {
                NewsData.map((item, index) => {
                    return <NewsSmall key={index} item={item} />;
                })
            }
        </div>
    )
}

export default News;