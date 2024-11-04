import { toast } from 'react-toastify';

const getCartlist = () => {
  const storedCartlistStr = localStorage.getItem('cart');
  return storedCartlistStr ? JSON.parse(storedCartlistStr) : [];
};

const getWishlist = () => {
  const storedWishlistStr = localStorage.getItem('wishlist');
  return storedWishlistStr ? JSON.parse(storedWishlistStr) : [];
};

const addToWishlistStorage = (id) => {
  const storedWishlist = getWishlist();

  if (storedWishlist.includes(id)) {
    toast.error('Already added to Wishlist');
  } else {
    storedWishlist.push(id);
    localStorage.setItem('wishlist', JSON.stringify(storedWishlist));
    toast.success('Product is added to Wishlist');
  }
};

const removeFromWishlistStorage = (id) => {
  const storedWishlist = getWishlist();
  const updatedWishlist = storedWishlist.filter((item) => item !== id);

  localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  toast.success('Product removed from Wishlist');
};

const addToCartStorage = (id) => {
  const storedCartlist = getCartlist();

  if (storedCartlist.includes(id)) {
    toast.error('Already added to Cart');
  } else {
    storedCartlist.push(id);
    localStorage.setItem('cart', JSON.stringify(storedCartlist));
    toast.success('Product is added to Cart');
  }
};

const removeFromCartStorage = (id) => {
  const storedCartlist = getCartlist();
  const updatedCartlist = storedCartlist.filter((item) => item !== id);

  localStorage.setItem('cart', JSON.stringify(updatedCartlist));
  toast.success('Product removed from Cart');
};

export { getCartlist, getWishlist, addToCartStorage, addToWishlistStorage, removeFromCartStorage, removeFromWishlistStorage };
