import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { AppContext } from './AppContext';

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [dashboardTab, setDashboardTab] = useState('cart');

  const handleDashboardTab = (tab) => {
    setDashboardTab(tab);
  };

  const addToCart = (id) => {
    setCart([...cart, id]);
    toast.success('Product added to cart');
  };

  const addToWishlist = (id) => {
    if (!wishlist.includes(id)) {
      setWishlist([...wishlist, id]);
      toast.success('Product added to wishlist');
    } else {
      toast.error('Already added to wishlist');
    }
  };

  const handleRemoveFromCart = (id) => {
    const index = cart.indexOf(id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const handleRemoveFromWishlist = (id) => {
    const newWishlist = wishlist.filter((item) => item !== id);
    setWishlist(newWishlist);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        wishlist,
        addToWishlist,
        dashboardTab,
        handleDashboardTab,
        handleRemoveFromCart,
        handleRemoveFromWishlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
