
import { Link, NavLink } from 'react-router-dom';
import Loader from '../loader/loader';
import useCart from '../../contexts/cart/useCart';
export default function Navbar({ categories, isLoading }) {
    const data = useCart();
    console.log("My Data.", data);
    return (
        <div className='flex justify-between overflow-auto'>
            <ul className="flex list-none h-[3rem] gap-4 items-center px-10 text-white">
                {isLoading && <Loader />}
                {
                    categories && categories.length ? categories.map((item, index) => {
                        return (
                            <li className='whitespace-nowrap' key={index}>
                                <NavLink to={`/products/${item}`}>{item}</NavLink>
                            </li>
                        )
                    }) : <></>
                }

            </ul>

            <ul className="flex list-none h-[3rem] gap-4 items-center px-4 text-white">
                <li>
                    <Link to='/'> <i className="fa-solid fa-cart-shopping">Cart</i></Link>
                </li>
            </ul>
        </div>
    );
}