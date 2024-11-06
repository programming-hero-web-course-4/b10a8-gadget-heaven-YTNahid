import { Link, NavLink, useLocation } from 'react-router-dom';
import { CiShoppingCart, CiHeart, CiMenuFries } from 'react-icons/ci';
import { useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';

const Header = () => {
  const { cart, wishlist, handleDashboardTab } = useContext(AppContext);
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  const location = useLocation();

  const isHome = location.pathname === '/';

  const navLinks = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/statistics'}>Statistics</NavLink>
      </li>
      <li>
        <NavLink to={'/dashboard'}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={'/contact'}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <header className={`section z-50 relative ${isHome ? 'home pt-4 lg:pt-14' : 'py-5 bg-white'} `}>
      <div className="row exclude max-w-[1340px] items-center">
        <div className="column w-[40%] order-1 lg:w-1/3">
          <Link to={'/'}>
            <div className={`${isHome ? 'text-white' : ''} text-lg md:text-xl font-bold`}>Gadget Heaven</div>
          </Link>
        </div>
        <div className="column w-[15%] order-3 items-end lg:order-2 lg:w-1/3">
          <CiMenuFries className={`${isHome ? 'text-white' : 'text-black'} text-2xl lg:hidden`} onClick={() => handleMenuToggle()}></CiMenuFries>
          <ul
            className={`header-menu shadow lg:shadow-none flex flex-col ${isHome ? 'bg-white' : 'bg-primary-color'} pl-5 py-3 ${
              isHome ? '!text-black' : '!text-white'
            } self-center gap-4  w-full lg:gap-10 scale-0 absolute left-0 top-[80px] ${menuToggle ? 'scale-100' : ''} lg:flex ${
              isHome ? 'lg:!text-white' : 'lg:!text-black'
            } lg:scale-100 lg:static lg:bg-transparent lg:flex-row`}
          >
            {navLinks}
          </ul>
        </div>
        <div className="column flex-row justify-end w-[45%] order-2 lg:order-3 lg:w-1/3">
          <Link
            to={'/dashboard'}
            onClick={() => handleDashboardTab('cart')}
            className="cart bg-white h-10 w-10 flex items-center justify-center rounded-full shadow relative hover:bg-primary-color hover:text-white"
          >
            <CiShoppingCart className="text-2xl" />
            {cart.length > 0 ? (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            ) : null}
          </Link>
          <Link
            to={'/dashboard'}
            onClick={() => handleDashboardTab('wishlist')}
            className="wishlist bg-white h-10 w-10 flex items-center justify-center rounded-full shadow relative hover:bg-primary-color hover:text-white"
          >
            <CiHeart className="text-2xl" />
            {wishlist.length > 0 ? (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            ) : null}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
