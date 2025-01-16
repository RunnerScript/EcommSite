const Product = ({ product }) => {
    const { title, price, description, image, rating } = product;

    return (
        <div className="flex flex-col justify-end shadow-dramatic-inset m-10 bg-contain bg-center rounded-lg  hover:scale-110 duration-200 h-[15rem] w-[15rem] " style={{ backgroundImage: `url(${image})` }} >
            <div className="bg-[rgba(20,10,10,0.7)] text-white p-4 rounded-lg">
                <h1 className="text-md font-bold">{title}</h1>
                <div className="flex justify-between mt-4 items-center">
                    <span className="font-bold text-green-600"> {`$${price}`}</span>
                    <span className="text-right font-bol bg-black rounded-lg text-white px-2 py-2 cursor-pointer">AddToCart</span>
                </div>
            </div>

        </div >
    )
}
export default Product;