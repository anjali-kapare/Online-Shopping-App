import {useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-contex'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.products.reduce((currentNo, product)=> {
    const convertedQuantityNo=  +product.quantity
    return currentNo + convertedQuantityNo;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )

}

export default HeaderCartButton;