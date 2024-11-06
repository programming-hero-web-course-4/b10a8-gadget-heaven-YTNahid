import { useContext } from 'react';
import PropTypes from 'prop-types';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { CiShoppingCart } from 'react-icons/ci';
import { AppContext } from '../Context/AppContext';

const WishlistProducts = ({ wishlistProducts }) => {
  const { handleRemoveFromWishlist, addToCart } = useContext(AppContext);

  return (
    <>
      <div className="row">
        <div className="column">
          <h3 className="heading">Wishlist</h3>
        </div>
      </div>
      {!wishlistProducts.length ? <p>Your wishlist is empty. Please add some products</p> : ''}
      {wishlistProducts.map((product) => (
        <div className="row relative items-center gap-5 rounded-xl border border-border-color bg-white p-4" key={product.product_id}>
          <div className="column md:w-[25%] lg:w-[15%]">
            <img src={product.product_image} alt="Product" className="w-full" />
          </div>
          <div className="column md:w-[75%] lg:w-[85%] gap-3">
            <h4 className="heading">{product.product_title}</h4>
            <p className="text">{product.description}</p>
            <p className="text text-black">Price: ${product.price}$</p>
            <button
              className="flex self-start items-center gap-3 px-6 py-3 border border-primary-color  rounded-full bg-primary-color font-bold text-white hover:bg-transparent hover:text-primary-color"
              onClick={() => addToCart(product.product_id)}
            >
              Add To Cart <CiShoppingCart className="text-xl" />
            </button>
          </div>
          <IoCloseCircleOutline
            className="absolute top-5 right-5 text-2xl text-red-600 cursor-pointer"
            onClick={() => {
              handleRemoveFromWishlist(product.product_id);
            }}
          />
        </div>
      ))}
    </>
  );
};

WishlistProducts.propTypes = {
  wishlistProducts: PropTypes.array.isRequired,
  setWishlistProducts: PropTypes.func,
};

export default WishlistProducts;
