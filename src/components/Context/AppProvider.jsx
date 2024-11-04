import { createContext, useState, useEffect } from 'react';
import { getCartlist, getWishlist } from '../ProductDetails/cartStorage';
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [dashboardTab, setDashboardTab] = useState('cart');

  const handleDashboardTab = (tab) => {
    setDashboardTab(tab);
  };

  useEffect(() => {
    setCart(getCartlist());
    setWishlist(getWishlist());
  }, []);

  return <AppContext.Provider value={{ cart, setCart, wishlist, setWishlist, dashboardTab, handleDashboardTab }}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
