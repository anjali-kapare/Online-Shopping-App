import { useContext, useState } from "react";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-contex";
import CheckoutForm from './CheckoutForm';
import classes from "./Cart.module.css";


const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const totalProductAmount = `Rs${cartCtx.totalAmount.toFixed(2)}`;
  const hasProducts = cartCtx.products.length > 0;

  const orderHandler = () => {
    setIsCheckout(true);
  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalProductAmount}</span>
      </div>
      {isCheckout && <CheckoutForm onCancel={props.onClose} />}
      {!isCheckout && 
      <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasProducts && <button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>}
    </Modal>
  );
};

export default Cart;