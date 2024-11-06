import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import CartProvider from '../Context/AppProvider';
import AppProvider from '../Context/AppProvider';

const Root = () => {
  return (
    <>
      <AppProvider>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </AppProvider>
    </>
  );
};

export default Root;
