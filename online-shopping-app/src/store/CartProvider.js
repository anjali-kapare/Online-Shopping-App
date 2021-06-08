import {useReducer} from 'react';
import CartContext from './cart-contex';

const defaultCartState = {
  products: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if(action.type === 'ADD_PRODUCT'){
    const updatedProducts = state.products.concat(action.product);
    const updatedTotal = state.totalAmount+action.product.price*action.product.quantity;

    return({
      products: updatedProducts,
      totalAmount: updatedTotal,
    })
  }
  return defaultCartState;
}

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addProductHandler = (product) => {
    dispatchCart({type: 'ADD_PRODUCT', product: product});
  };
  const removeProductHandler = (id) => {
    dispatchCart({type: 'REMOVE', id: id});
  }
  const cartContext= {
    products: cartState.products,
    totalAmount: cartState.totalAmount,
    addItem : addProductHandler,
    removeItem : removeProductHandler
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )

}

export default CartProvider;