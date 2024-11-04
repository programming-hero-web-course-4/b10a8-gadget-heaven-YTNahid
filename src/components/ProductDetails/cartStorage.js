import { toast } from 'react-toastify';

const getCartlist = () => {
  const storedCartlistStr = localStorage.getItem('cart');
  if (storedCartlistStr) {
    const storedCartlist = JSON.parse(storedCartlistStr);
    return storedCartlist;
  } else {
    return [];
  }
};

// const getWishlist = () => {};

const addToCartStorage = (id) => {
  const storedCartlist = getCartlist();

  if (storedCartlist.includes(id)) {
    toast.error('Already added to cart');
    console.log('Already added');
  } else {
    storedCartlist.push(id);
    const storedCartlistStr = JSON.stringify(storedCartlist);
    localStorage.setItem('cart', storedCartlistStr);
  }
};

export { addToCartStorage };
