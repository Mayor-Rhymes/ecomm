

'use client'
import Link from "next/link";
import { MdShoppingCart } from 'react-icons/md';


const Navbar = () => {


  
  
  return (
    <nav className="flex w-full h-[80px] bg-black text-white items-center px-4">
      <h3 className="grow text-3xl">Oremoxie</h3>

      <ul className="flex list-none grow-[2] justify-evenly">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Shop</Link>
        </li>
      </ul>

      <ul className="flex list-none grow-[2] justify-evenly">
        <li>
          <Link href="#" className="header__checkout snipcart-checkout">
            <MdShoppingCart className="text-2xl inline"/>
            <span className="snipcart-total-price">NGN 0.00</span>
            (<span className="snipcart-items-count">{0}</span>)
          </Link>
        </li>
        {/* <li>
          <Link href="" className="text-white bg-blue-400 p-4 rounded-xl hover:bg-red-400 transition-all">
            Login/Signup
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
