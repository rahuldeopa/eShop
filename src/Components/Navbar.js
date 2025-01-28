import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
const Navbar = () => {
  const cartItems=useSelector((store)=>store.cart.cartItems);

  return (
      <div className="flex justify-between px-10 py-5 shadow-md ">
        <h1 className="font-bold text-2xl">LOGO</h1>
        <ul className="flex justify-between w-[40%]  ">
          <li className="nav-link"><Link to='/' className="">Home</Link></li>
          <li className="nav-link"><Link to="/kid" >Kids</Link></li>
          <li className="nav-link"><Link to="/women" >Women</Link></li>
          <li className="nav-link"><Link to="/Grocery" >Grocery</Link></li>
          <li className="nav-link" ><Link to="/Cart">Cart {cartItems.length}</Link></li>
          <li className="nav-link"><Link to="/about" >About</Link></li>
          
        </ul>
      </div>
  );
};
export default Navbar;
