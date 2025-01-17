import useCart from "../../contexts/cart/useCart"
import CartItem from "./CartItem";
const CartItems = () => {
    const { cart } = useCart();
    const items = Object.keys(cart);


    return (
        <div className="flex justify-center items-center h-[80vh]">
            {items.length > 0 ? items.map(cartItem => <CartItem key={cart[cartItem].id} cartItem={cart[cartItem]} />) : (<h1 className="m-2 font-bold text-center text-3xl animate-fade-in">No product in cart</h1>)}
        </div>
    )
}
export default CartItems;