import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { product_id, product_title, product_image, price } = product;

  return (
    <div className="column border border-border-color rounded-xl bg-white p-5 items-center gap-2">
      <div className="bg-bg-color rounded-xl w-full h-[150px] p-5">
        <img src={product_image} alt={product_title} className="h-full object-contain" />
      </div>
      <h6 className="heading text-center mt-3">{product_title}</h6>
      <p className="text">Price: {price}$</p>
      <Link
        to={`/product_details/${product_id}`}
        className="mt-3 px-8 py-3 border border-primary-color  rounded-full bg-primary-color font-bold text-white hover:bg-transparent hover:text-primary-color"
      >
        Details
      </Link>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
