import { useParams } from "react-router-dom";
import { useFetchData } from "../../apis/useFetchData";
import Product from "../../components/product/Product";

export const ProductListing = () => {
    const { categoryName } = useParams()
    const { data: products, error, isLoading } = useFetchData(`https://fakestoreapi.com/products/category/${categoryName}`, []);

    return (
        <div className="flex flex-wrap justify-center">
            {products && products.length > 0 ? products.map(product => <Product key={product.id} product={product} />) : ''}
        </div>
    )
}
