import { createContext, useState, useEffect } from 'react';
import { getCartlist, getWishlist } from '../ProductDetails/cartStorage';
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setCart(getCartlist());
    setWishlist(getWishlist());
  }, []);

  return <AppContext.Provider value={{ cart, setCart, wishlist, setWishlist }}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
