import { ProductItems } from "../context/shop/type";
import { useEcomContext } from "../context/shop/ShoppinContext";
import { CheckItemExistInCart } from "../utils/index";

type PropsType = {
    item: ProductItems;
};

export const Product = ({ item }: PropsType) => {
    const { addItem, removeItem } = useEcomContext();

    const addItemHandler = (item: ProductItems) => {
        addItem({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1,
        });
    };

    const removeItemHandler = (item: ProductItems) => {
        removeItem(item.id);
    };

    return (
        <div className="col-sm-4" key={item.id}>
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src={item.imgUrl}
                    className="card-img-top"
                    alt={item.name}
                />
                <div className="card-body">
                    <div style={{ position: "relative" }}>
                        <span
                            className="card-title"
                            style={{ fontWeight: "bold" }}
                        >
                            {item.name}
                        </span>
                        <span
                            className="card-title"
                            style={{
                                fontWeight: "bold",
                                position: "absolute",
                                right: "1px",
                            }}
                        >
                            ₹{item.price}
                        </span>
                    </div>
                    <br />
                    <p className="card-text">
                        {CheckItemExistInCart(item) ? (
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={(e) => removeItemHandler(item)}
                            >
                                Remove
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={(e) => addItemHandler(item)}
                            >
                                Add
                            </button>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};
