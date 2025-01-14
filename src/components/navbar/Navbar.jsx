
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {


    return (
        <div className='flex justify-between'>
            <ul className="flex list-none h-[40px] gap-4 items-center px-4 text-white">
                <li>
                    <NavLink to='/'> Home</NavLink>
                </li>
                <li>
                    <NavLink to='/aboutus'> About Us</NavLink>
                </li>
            </ul>

            <ul className="flex list-none h-[40px] gap-4 items-center px-4 text-white">
                <li>
                    <Link to='/'> <i className="fa-solid fa-cart-shopping">Cart</i></Link>
                </li>
            </ul>
        </div>
    );
}