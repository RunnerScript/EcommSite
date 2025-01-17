import useCart from "../../contexts/cart/useCart";

const AddToCart = ({ product }) => {

    const quantity = product.quantity ? product.quantity : 0;
    const { cart, addToCart, removeFromCart } = useCart();
    const itemInCart = cart[product.id];

    return (
        <>
            {quantity ? (
                <div className="flex justify-center gap-2 py-2">
                    <div className="fle flex-col items-center">
                        <button className=" bg-green-700 rounded-lg leading-none text-white font-bold px-2 flex items-center flex-col text-2xl h-[2rem]" onClick={() => removeFromCart(product)} >- </button>
                    </div>
                    <div className="w-10 rounded-lg bg-white leading-0 text-black text-center font-bold">{quantity}</div>
                    <div className="fle flex-col items-center">

                        <button className=" bg-green-700 rounded-lg leading-none text-white font-bold px-2 flex items-center flex-col text-2xl h-[2rem]" onClick={() => addToCart(product)} >+ </button>
                    </div>
                </div>

            ) : (
                <button className="mt-4 bg-black px-4 py-2 rounded-lg" onClick={() => addToCart(product)}>AddToCart</button>
            )}

        </>
    )

}
export default AddToCart;