const Product = ({ product }) => {
    const { title, price, description, image, rating } = product;

    return (
        <div className="bg-cover bg-center rounded-lg hover:scale-110 duration-200" style={{ backgroundImage: image }} >
            <h1>{title}</h1>
            <p>{description}</p>
            <span>{price}</span>
        </div >
    )
}
export default Product;