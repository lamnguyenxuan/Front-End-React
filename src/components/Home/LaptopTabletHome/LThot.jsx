import LTsmall from "./LTsmall"
import { ProductsData } from "../../Data/ProductsData"

export default () => {
    return (
        <div className="ltHot">
            <div className="ltLists">
                <h3>Laptop- Máy tính bảng</h3>
                <div className="ltList">
                    {
                        ProductsData.map((product, index) => {
                            return (product.brand == "Tablet" || product.brand == "Laptop") && <LTsmall key={index} id={product.id} image={product.image} title={product.title} newPrice={product.newPrice} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}