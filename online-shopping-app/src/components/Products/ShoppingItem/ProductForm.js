import {useRef, useState} from 'react';
import Input from './ProductQuantityInput'
import classes from './ProductForm.module.css';

const ProductForm = (props) => {
  const quantityInputRef = useRef();
  const [isQuantityValid, setIsQuantityValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredQuantity = quantityInputRef.current.value;
    const convertedQuantity = + enteredQuantity;

    if(enteredQuantity.trim().length === 0 || enteredQuantity<1 || convertedQuantity > 5){
      setIsQuantityValid(false);
      return;
    }
    props.onAddToCart(enteredQuantity);
  }
  return(
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
      ref={quantityInputRef}
       label="Quantity" 
       input={{
        id: 'Quantity'+props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }}></Input>
      <button>+ ADD </button>
      {!isQuantityValid && <p>Please enter valid quantity (1-5).</p>}
    </form>
  )
}

export default ProductForm;