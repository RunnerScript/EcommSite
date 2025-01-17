
import { Link, NavLink } from 'react-router-dom';
import Loader from '../loader/loader';
import useCart from '../../contexts/cart/useCart';

export default function Navbar({ categories, isLoading }) {
    const { totalQuantity } = useCart();

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
                    <Link to='/cart' className='relative'>

                        <div className="flex  justify-center items-center w-8 h-8 bg-black rounded-full shadow cursor-pointer">
                            <div className="space-y-1">
                                <div className="w-6 h-0.5 bg-white"></div>
                                <div className="w-6 h-0.5 bg-white"></div>
                                <div className="w-6 h-0.5 bg-white"></div>
                            </div>
                        </div>
                        {totalQuantity > 0 ? (<div className=" p-[0.6rem] flex items-center justify-center leading-none absolute right-0 top-0 w-2 h-2 bg-red-600 text-white text-[0.75rem]   rounded-full">
                            {totalQuantity}
                        </div>) : <></>}


                    </Link>
                </li>
            </ul>
        </div>
    );
}