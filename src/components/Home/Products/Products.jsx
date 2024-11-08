import { useLoaderData } from 'react-router-dom';
import Product from './Product/Product';
import { useState } from 'react';

const Products = () => {
  const [productTab, setProductTab] = useState('All');

  const products = useLoaderData();

  const handleTab = (tab) => {
    setProductTab(tab);
  };

  return (
    <div className="section py-[45px] lg:py-[70px]">
      <div className="row">
        <div className="column">
          <h2 className="heading text-center">Explore Cutting-Edge Gadgets</h2>
        </div>
      </div>
      <div className="row max-w-[1340px] items-start flex-col lg:flex-row">
        <div className="column mb-5 lg:mb-0 lg:w-1/5 bg-white border border-border-color rounded-xl">
          <div className="tab flex flex-col md:flex-row lg:flex-col gap-5 p-5">
            <button className={`tablinks ${productTab === 'All' ? 'active' : ''}`} onClick={() => handleTab('All')}>
              All Products
            </button>
            <button className={`tablinks ${productTab === 'Laptops' ? 'active' : ''}`} onClick={() => handleTab('Laptops')}>
              Laptops
            </button>
            <button className={`tablinks ${productTab === 'Phones' ? 'active' : ''}`} onClick={() => handleTab('Phones')}>
              Phones
            </button>
            <button className={`tablinks ${productTab === 'Accessories' ? 'active' : ''}`} onClick={() => handleTab('Accessories')}>
              Accessories
            </button>
          </div>
        </div>
        <div className="column pt-0  lg:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            if (productTab === product.category) return <Product key={product.product_id} product={product}></Product>;
            else if (productTab === 'All') return <Product key={product.product_id} product={product}></Product>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
