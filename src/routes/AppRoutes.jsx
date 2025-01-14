import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../components/header/Header";
import Home from '../pages/home/Home';
import AboutUs from '../pages/aboutus/AboutUs';
import PageNotFound from '../pages/pageNotFound/PageNotFound';
import PrivateRoutes from './PrivateRoutes';
import Dashboard from '../dashboard/Dashboard';
import Loader from '../components/loader/loader';
import { useFetchData } from '../apis/useFetchData';
const AppRoutes = () => {
    const isAuthenticated = true;
    const { data, error, isLoading } = useFetchData('https://fakestoreapi.com/products/categories', []);
    return (
        <>
            <Router>
                <Header />
                <Loader />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="*" element={<PageNotFound />} />
                    <Route path='/dashboard' element={<PrivateRoutes element={<Dashboard />} isUserAuthenticated={isAuthenticated} />} />
                </Routes>

            </Router>
        </>
    )

}
export default AppRoutes;