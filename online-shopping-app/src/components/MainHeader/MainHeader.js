import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>Shopex</h1>
      <Navigation onCartClick={props.onShowCart}/>
    </header>
  );
};

export default MainHeader;
