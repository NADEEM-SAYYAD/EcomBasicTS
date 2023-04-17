import { useState, createContext, useContext } from "react";
import { products as p } from "../../data/items";
import { CombinedItems, PropsChildrenType, CartItems } from "./type";

export type CartContextType = {
    ecom: CombinedItems;
    setEcom: React.Dispatch<React.SetStateAction<CombinedItems>>;
    addItem: (item: CartItems) => void;
    removeItem : (id:number) => void
};

const initialState = {
    cartItems: [],
    products: [...p],
};
const ShoppinContext = createContext<CartContextType>({} as CartContextType);

const ShoppinContextProvider = ({ children }: PropsChildrenType) => {
    const [ecom, setEcom] = useState<CombinedItems>(initialState);

    const addItem = (item: CartItems) => {
        //check item exist in array or not
        let itemExist = ecom.cartItems.findIndex((i) =>
            i.id === item.id ? true : false
        );
        if (itemExist === -1) {
            setEcom({
                ...ecom,
                cartItems: [...ecom.cartItems, item],
            });
        } else {
            let result = ecom.cartItems.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : { ...i }
            );
            setEcom({
                ...ecom,
                cartItems: [...result],
            });
        }
    };
    const removeItem = (id:number) =>{
        let itemValue = ecom.cartItems.find((i) =>
            i.id === id ? true : false
        ) as CartItems;

        if(itemValue?.quantity > 1){
            let result = ecom.cartItems.map((i) =>
                i.id === id ? { ...i, quantity: i.quantity - 1 } : { ...i }
            );
            setEcom({
                ...ecom,
                cartItems: [...result],
            });
        }else{
            let filteredItem = ecom.cartItems.filter(i=>i.id !== id)
            setEcom({
                ...ecom,
                cartItems: [...filteredItem],
            });
        }
    }
    return (
        <ShoppinContext.Provider value={{ ecom, setEcom, addItem ,removeItem}}>
            {children}
        </ShoppinContext.Provider>
    );
};

const useEcomContext = () => useContext(ShoppinContext);

export { ShoppinContextProvider, useEcomContext };
