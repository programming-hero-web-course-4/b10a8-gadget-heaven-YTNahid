import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CartProvider from '../Context/AppProvider';

const Root = () => {
  return (
    <>
      <CartProvider>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </CartProvider>
    </>
  );
};

export default Root;
