import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { AppContext } from '../Context/AppContext';
import { FaSortAmountDown } from 'react-icons/fa';
import { toast } from 'react-toastify';
import successImg from '../../assets/Group.png';
import { useNavigate } from 'react-router-dom';

const CartProducts = ({ cartProducts, setCartProducts, totalPrice }) => {
  const { handleRemoveFromCart, setCart } = useContext(AppContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchaseTotal, setPurchaseTotal] = useState(0);

  const navigate = useNavigate();

  const handleSort = () => {
    const sortedProducts = [...cartProducts].sort((a, b) => b.price - a.price);

    const sortedIds = sortedProducts.map((product) => product.product_id);

    setCartProducts(sortedProducts);
    setCart(sortedIds);
  };

  const handlePurchase = () => {
    if (cartProducts.length > 0) {
      toast.success('Purchase Successful');
      setPurchaseTotal(totalPrice);
      setIsModalOpen(true);
      setCart([]);
    } else {
      toast.warn('Your cart is empty');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <>
      <div className="row">
        <div className="column w-[15%]">
          <h3 className="heading">Cart</h3>
        </div>
        <div className="column w-[85%] flex-row items-center justify-end">
          <h4 className="heading">Total Price: {totalPrice}$</h4>
          <button
            className="flex items-center gap-3 px-6 py-3 border border-primary-color  rounded-full bg-primary-color font-bold text-white hover:bg-transparent hover:text-primary-color"
            onClick={() => handleSort()}
          >
            Sort By Price <FaSortAmountDown className="text-xl" />
          </button>
          <button
            className="flex items-center gap-3 px-6 py-3 border border-primary-color  rounded-full bg-primary-color font-bold text-white hover:bg-transparent hover:text-primary-color"
            onClick={() => handlePurchase()}
          >
            Purchase
          </button>
        </div>
      </div>
      {!cartProducts.length ? <p>Your cart is empty. Please add some products</p> : ''}
      <div className="column">
        {cartProducts.map((product, idx) => (
          <div className="row relative items-center gap-5 rounded-xl border border-border-color bg-white p-4" key={idx}>
            <div className="column w-[15%]">
              <img src={product.product_image} alt="Product" className="w-full" />
            </div>
            <div className="column w-[85%] gap-3">
              <h4 className="heading">{product.product_title}</h4>
              <p className="text">{product.description}</p>
              <p className="text text-black">Price: ${product.price}$</p>
            </div>
            <IoCloseCircleOutline
              className="absolute top-5 right-5 text-2xl text-red-600 cursor-pointer"
              onClick={() => {
                handleRemoveFromCart(product.product_id);
              }}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col justify-center items-center gap-5 bg-white p-6 rounded-lg w-[400px] text-center">
            <img src={successImg} alt="" className="w-16" />
            <h4 className="heading">Payment Successfully</h4>
            <p className="text">Thanks for purchasing</p>
            <p className="text">Total: {purchaseTotal}$</p>
            <button onClick={closeModal} className="px-6 py-2 bg-primary-color text-white rounded-full hover:bg-primary-dark">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

CartProducts.propTypes = {
  cartProducts: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func,
  totalPrice: PropTypes.number,
  setCartProducts: PropTypes.func,
};

export default CartProducts;
