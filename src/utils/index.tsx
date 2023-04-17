import { ProductItems } from "../context/shop/type";
import { useEcomContext } from "../context/shop/ShoppinContext";

export const CheckItemExistInCart = (item: ProductItems) => {
    const {
        ecom: { cartItems },
    } = useEcomContext();
    return cartItems.some(c => c.id === item.id ? true : false);
};
