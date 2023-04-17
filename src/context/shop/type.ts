export type ProductItems = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
}
export type CartItems = {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
export type CombinedItems = {
    cartItems: CartItems[];
    products: ProductItems[];
}

export type PropsChildrenType = {
    children: React.ReactNode;
};