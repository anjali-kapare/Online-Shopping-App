import { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-contex";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalProductAmount = `Rs${cartCtx.totalAmount.toFixed(2)}`;
  const hasProducts = cartCtx.products.length > 0;
  console.log(cartCtx.products);

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
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasProducts && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;