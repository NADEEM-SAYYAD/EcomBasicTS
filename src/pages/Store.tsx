import { useEcomContext } from "../context/shop/ShoppinContext";
import { Product } from "../components/Product";

export const Store = () => {
    const {
        ecom: { products },
    } = useEcomContext();

    return (
        <div className="row">
            {products.map((item) => (
                <Product item={item} />
            ))}
        </div>
    );
};
