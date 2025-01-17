import CartContext from "./CartContext"
import { useState } from "react";
const CartProvider = ({ children }) => {
    const [cartState, setCartState] = useState({});
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addToCart = (product) => {
        const updatedCart = { ...cartState };

        if (updatedCart[product.id]) {
            updatedCart[product.id].quantity += 1
        } else {
            updatedCart[product.id] = product;
            updatedCart[product.id].quantity = 1;
        }

        setTotalQuantity((prevQuantity) => prevQuantity + 1);
        setCartState(updatedCart);
    }

    const removeFromCart = (productId) => {
        const updatedCart = { ...cartState }
        if (updatedCart[productId]) updatedCart[productId].quantity -= 1;
        if (updatedCart[productId].quantity <= 0) delete updatedCart[productId];
        setTotalQuantity((prevQuantity) => prevQuantity - 1);
        setCartState(updatedCart);
    }

    const cartContextValue = {
        cart: cartState,
        totalQuantity,
        addToCart,
        removeFromCart
    }
    return (
        <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
    );
}
export default CartProvider;