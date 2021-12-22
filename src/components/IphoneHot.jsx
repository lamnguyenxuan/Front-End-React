import IphoneSmall from "./IphoneSmall"
import { ProductsData } from "./Data/ProductsData"

export default () => {
    return (
        <div className="iphoneHot">
            <div className="iphoneLists">
                <h3>Iphone giá tốt nhất</h3>
                <div className="iphoneList">
                    {
                        ProductsData.map((product, index) => {
                            return product.brand == "Iphone" && <IphoneSmall key={index} id={product.id} image={product.image} title={product.title} newPrice={product.newPrice} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}