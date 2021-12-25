import { NavLink, useParams } from "react-router-dom"
import { getById } from "../Data/ProductsData";
export default () => {
    const param = useParams();
    const id = param.id;
    const product = getById(id);
    return (
        <div className="product-mini-extra">
            <div className="extra-title">
                <h6>SKU:&nbsp;<span>SQI1287</span></h6>
                <h6>Danh mục:&nbsp;<span>{product.brand}</span></h6>
            </div>
            <div className="extra-content">
                <p>
                    – Chính hãng, Mới 100%, Nguyên seal <br />

                    – Màn hình: 6.15″ IPS LCD <br />

                    – Camera sau: 8MP, 2MP, 24MP <br />

                    – Camera trước: 32MP <br />

                    – Bộ nhớ: 128GB <br />

                    – RAM: 6GB <br />

                    – Hệ điều hành: Android <br />
                    &nbsp;
                </p>
            </div>
        </div>
    )
}