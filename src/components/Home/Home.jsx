import { useEffect } from 'react';
import Hero from './Hero/Hero';
import Products from './Products/Products';

const Home = () => {
  useEffect(() => {
    document.title = 'Gadget Heaven';
  }, []);
  return (
    <main>
      <Hero></Hero>
      <Products></Products>
    </main>
  );
};

export default Home;
