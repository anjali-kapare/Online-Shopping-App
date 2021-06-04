import React, { useContext } from 'react';

import AuthContext from '../../store/auth-context';
import HeaderCartButton from '../Layout/HeaderCartButton'
import classes from './Navigation.module.css';

const Navigation = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <HeaderCartButton onClick={props.onCartClick}></HeaderCartButton>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
