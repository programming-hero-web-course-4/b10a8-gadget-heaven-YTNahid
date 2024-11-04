import { Link, NavLink, useLocation } from 'react-router-dom';
import { CiShoppingCart, CiHeart } from 'react-icons/ci';

const Header = () => {
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
          <Link className="bg-white h-10 w-10 flex items-center justify-center rounded-full shadow">
            <CiShoppingCart className="text-black text-2xl" />
          </Link>
          <Link className="bg-white h-10 w-10 flex items-center justify-center rounded-full shadow">
            <CiHeart className="text-black text-2xl" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
