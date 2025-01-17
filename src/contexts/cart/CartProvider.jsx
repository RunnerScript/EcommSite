import CartContext from "./CartContext"
const CartProvider = ({ children }) => {
    return (
        <CartContext.Provider value={1}>{children}</CartContext.Provider>
    );
}
export default CartProvider;