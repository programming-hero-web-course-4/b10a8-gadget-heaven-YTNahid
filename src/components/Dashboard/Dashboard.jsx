import { useContext } from 'react';
import { AppContext } from '../Context/AppProvider';
import { useLoaderData } from 'react-router-dom';

const Dashboard = () => {
  const { dashboardTab, handleDashboardTab, cart, wishlist } = useContext(AppContext);

  const products = useLoaderData();

  const cartProducts = products.filter((product) => cart.includes(product.product_id));
  const wishlistProducts = products.filter((product) => wishlist.includes(product.product_id));

  return (
    <section className="section">
      <div className="row bg-white border border-border-color rounded-3xl p-1 overflow-hidden max-w-[1540px]">
        <div className="column items-center bg-primary-color rounded-3xl max-w-[1540px] lg:py-8">
          <h2 className="heading text-center max-w-[850px] text-white">Dashboard</h2>
          <p className="text text-white max-w-[600px] text-center">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it
            all!
          </p>
          <div className="flex gap-5">
            <button
              className={`dashtab ${
                dashboardTab === 'cart' ? 'text-primary-color bg-white' : 'text-white bg-transparent'
              } border border-white rounded-full px-14 py-3 w-[170px] font-bold`}
              onClick={() => handleDashboardTab('cart')}
            >
              Cart
            </button>
            <button
              className={`dashtab ${
                dashboardTab === 'wishlist' ? 'text-primary-color bg-white' : 'text-white bg-transparent'
              } border border-white rounded-full px-14 py-3 w-[170px] font-bold`}
              onClick={() => handleDashboardTab('wishlist')}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
