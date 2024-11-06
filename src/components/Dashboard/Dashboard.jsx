import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { useLoaderData } from 'react-router-dom';
import CartProducts from './CartProducts';
import WishlistProducts from './WishlistProducts';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Gadget Heaven - Dashboard';
  }, []);

  const { dashboardTab, handleDashboardTab, cart, wishlist } = useContext(AppContext);

  const products = useLoaderData();

  const [cartProducts, setCartProducts] = useState([]);
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    setCartProducts(cart.flatMap((id) => products.filter((product) => product.product_id === id)));
    setWishlistProducts(products.filter((product) => wishlist.includes(product.product_id)));
  }, [cart, wishlist, products]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartProducts.reduce((acc, product) => acc + product.price, 0);
    setTotalPrice(parseFloat(total.toFixed(2)));
  }, [cartProducts]);

  return (
    <section className="section">
      <div className="row bg-white border border-border-color rounded-3xl p-1 overflow-hidden max-w-[1540px]">
        <div className="column items-center bg-primary-color rounded-3xl max-w-[1540px] py-6 lg:py-8">
          <h2 className="heading text-center max-w-[850px] text-white">Dashboard</h2>
          <p className="text text-white max-w-[500px] text-center">
            Here you can view your cart and wishlist. If you are ready to purachase our products, click purchase!
          </p>
          <div className="flex gap-5">
            <button
              className={`dashtab ${
                dashboardTab === 'cart' ? 'text-primary-color bg-white' : 'text-white bg-transparent'
              } border border-white rounded-full  py-3 w-[170px] font-bold`}
              onClick={() => handleDashboardTab('cart')}
            >
              Cart
            </button>
            <button
              className={`dashtab ${
                dashboardTab === 'wishlist' ? 'text-primary-color bg-white' : 'text-white bg-transparent'
              } border border-white rounded-full  py-3 w-[170px] font-bold`}
              onClick={() => handleDashboardTab('wishlist')}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          {dashboardTab === 'cart' ? (
            <CartProducts cartProducts={cartProducts} totalPrice={totalPrice} setCartProducts={setCartProducts}></CartProducts>
          ) : (
            <WishlistProducts wishlistProducts={wishlistProducts} setWishlistProducts={setWishlistProducts}></WishlistProducts>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
