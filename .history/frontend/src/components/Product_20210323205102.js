import './Product.css';
import {Link} from 'react-router-dom';

const Product = () => {
  return (
    <div className="product">
      <img src="" alt="" />
      <div className="product__info">
        <p className="info__name">Product 1</p>
        <p className="info__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p>$499.99</p>
        <Link to={}className="info__button">View</Link>
      </div>
    </div>
  );
};

export default Product;
