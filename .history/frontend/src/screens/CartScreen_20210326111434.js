import './CartScreen.css';

//Components
import CartItem from '../components/CartItem';

const CartScreen = () => {
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        <CartItem />
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal (0)</p>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
