import CartContext from "./CartContext"
const CartProvider = ({ children }) => {

    return (
        <CartContext.Provider value={1}></CartContext.Provider>
    );
}
export default CartProvider;