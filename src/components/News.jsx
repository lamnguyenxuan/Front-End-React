import NewsSmall from "./NewsSmall";
import { NewsData } from "./Data/NewsData";
const News = () => {
    return (
        <div className="news">
            <h4>TIN CÔNG NGHỆ NỔI BẬT</h4>
            {
                NewsData.map((item, index) => {
                    return <NewsSmall key={index} item={item} />;
                })
            }
        </div>
    )
}

export default News;