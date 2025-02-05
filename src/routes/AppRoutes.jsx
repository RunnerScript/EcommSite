import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../components/header/Header";
import Home from '../pages/home/Home';
import AboutUs from '../pages/aboutus/AboutUs';
import PageNotFound from '../pages/pageNotFound/PageNotFound';
import PrivateRoutes from './PrivateRoutes';
import Dashboard from '../dashboard/Dashboard';
import Loader from '../components/loader/loader';
import { useFetchData } from '../apis/useFetchData';
import { ProductListing } from '../pages/productListing/ProductListing';
import CartItems from '../components/cart/CartItems';

const AppRoutes = () => {
    const isAuthenticated = true;
    const { data: categories, error, isLoading } = useFetchData('https://fakestoreapi.com/products/categories', []);
    return (
        <>
            <Router>
                <Header categories={categories} isLoading={isLoading} />
                <Routes>
                    <Route path="/" element={<ProductListing />} />
                    {/* Dynamic routing */}
                    <Route path='/products/:categoryName' element={<ProductListing />} />
                    <Route path='/cart' element={<CartItems />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>

            </Router>
        </>
    )

}
export default AppRoutes;