import { useLoaderData, useLocation } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { CiShoppingCart, CiHeart } from 'react-icons/ci';
import { useContext, useEffect } from 'react';
import { AppContext } from '../Context/AppContext';

const ProductDetails = () => {
  const { addToCart, addToWishlist } = useContext(AppContext);

  const location = useLocation();

  const id = parseInt(location.pathname.split('/')[2]);

  const products = useLoaderData();
  const product = products.find((product) => product.product_id === id);

  const { product_id, product_title, product_image, category, price, description, specification, availability, rating } = product;

  useEffect(() => {
    document.title = `${product_title}`;
  }, [product_title]);

  return (
    <section className="section">
      <div className="row bg-white border border-border-color rounded-3xl p-1 overflow-hidden max-w-[1540px]">
        <div className="column items-center bg-primary-color rounded-3xl max-w-[1540px] py-6 lg:pt-6 lg:pb-[260px]">
          <h2 className="heading text-center max-w-[850px] text-white">Product Details</h2>
          <p className="text text-white max-w-[600px] text-center">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it
            all!
          </p>
        </div>
      </div>
      <div className="row lg:mt-[-230px] bg-white rounded-3xl p-5">
        <div className="column lg:w-1/3">
          <div className="bg-bg-color flex justify-center items-center p-6 rounded-xl">
            <img src={product_image} alt={product_title} className="object-contain w-full" />
          </div>
        </div>
        <div className="column lg:w-2/3 gap-4">
          <small className="text-text-color">{category}</small>
          <h3 className="heading">{product_title}</h3>
          <h6 className="heading text-text-color">Price: {price}$</h6>
          <p
            className={`${
              availability ? 'bg-green-100 text-green-600 border border-green-500' : 'bg-red-100 text-red-600 border border-red-500'
            } self-start rounded-full px-3`}
          >
            {availability ? 'In Stock' : 'Out Of Stock'}
          </p>
          <p className="text">{description}</p>
          <h5 className="heading">Specifications:</h5>
          <ol className="list-decimal pl-10">
            {specification.map((spec, index) => (
              <li key={index} className="text">
                {spec}
              </li>
            ))}
          </ol>
          <h5 className="heading">Rating:</h5>
          <div className="flex items-center gap-5 -mt-3">
            <ReactStars
              count={5}
              value={rating}
              size={30}
              edit={false}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <p className="text bg-gray-200 px-4 rounded-full text-gray-600">{rating}</p>
          </div>
          <div className="flex items-center gap-5">
            <button
              className="flex items-center gap-3 px-6 py-3 border border-primary-color  rounded-full bg-primary-color font-bold text-white hover:bg-transparent hover:text-primary-color"
              onClick={() => addToCart(product_id)}
            >
              Add To Cart <CiShoppingCart className="text-xl" />
            </button>
            <button
              className="flex items-center justify-center w-12 h-12 rounded-full border border-border-color hover:bg-primary-color hover:text-white"
              onClick={() => addToWishlist(product_id)}
            >
              <CiHeart className="text-3xl"></CiHeart>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
