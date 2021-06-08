import {useContext} from 'react';
import classes from './Product.module.css';
import ProductForm from './ProductForm';
import CartContext from '../../../store/cart-contex';
const Products = (props) => {
  const cartCtx = useContext(CartContext)
  const price = `Rs ${props.price.toFixed(2)}`

  const addToCartHandler = (quantity) => {
    cartCtx.addItem({
      id: props.id,
      name: props.productName,
      quantity: quantity,
      price: props.price,
    })
  }

  return(
    <li className={classes.product}>
      <div className={classes['item-image']}>
        <img src={props.img} alt="Product Image" />
      </div>
      <div>
        <h3>{props.itemName}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ProductForm id={props.id} onAddToCart={addToCartHandler}></ProductForm>
      </div>
    </li>
  )
}

export default Products;