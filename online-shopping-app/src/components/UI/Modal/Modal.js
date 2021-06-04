import {Fragment} from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = props => {
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
}

const Modal = (props) => {
  const portalElementId = document.getElementById('overlays');
  return (
    <Fragment>      
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElementId)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElementId)}
    </Fragment>
  )
}

export default Modal;