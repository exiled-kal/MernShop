import './Product.css';

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
        <p>
            $499.99
        </p>
      </div>
    </div>
  );
};

export default Product;
