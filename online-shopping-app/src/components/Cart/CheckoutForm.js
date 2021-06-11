import {useRef} from 'react';
import classes from './CheckoutForm.module.css';

const CheckoutForm = (props) => {
  const nameRef = useRef();
  const addressRef = useRef();
  const pinCodeRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredAddress =  addressRef.current.value;
    const enteredPinCode = pinCodeRef.current.value;
  }
  return(
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef}></input>
      </div>

      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressRef}></input>
      </div>

      <div className={classes.control}>
        <label htmlFor="pin">Pin Code</label>
        <input type="text" id="pin" ref={pinCodeRef}></input>
      </div>
      <div className={classes.actions}>
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  )
}

export default CheckoutForm;