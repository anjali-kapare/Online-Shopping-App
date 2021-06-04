import React, { useState, useContext } from 'react';
import user from './assets/icons/user.png';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Cart from "./components/Cart/Cart"
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      {ctx.isLoggedIn && cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <MainHeader onShowCart={showCartHandler}/>
      <main>
        {!ctx.isLoggedIn && <img src={user} className="User-icon" alt="logo" />}
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
