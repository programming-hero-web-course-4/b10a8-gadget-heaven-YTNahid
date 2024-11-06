import { Link, NavLink, useLocation } from 'react-router-dom';
import { CiShoppingCart, CiHeart } from 'react-icons/ci';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const Header = () => {
  const { cart, wishlist, handleDashboardTab } = useContext(AppContext);

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
    <header className={`section z-50 relative ${isHome ? 'home pt-14' : 'py-5 bg-white'} `}>
      <div className="row max-w-[1340px] items-center">
        <div className="column">
          <Link to={'/'}>
            <div className={`${isHome ? 'text-white' : ''} text-xl font-bold`}>Gadget Heaven</div>
          </Link>
        </div>
        <div className="column">
          <ul className="header-menu flex self-center gap-10">{navLinks}</ul>
        </div>
        <div className="column flex-row justify-end">
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
