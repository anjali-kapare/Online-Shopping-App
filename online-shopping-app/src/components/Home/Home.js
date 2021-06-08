import React from 'react';
import Products from '../Products/Products'
import shopImg from '../../assets/shop.jpeg';
import classes from './Home.module.css';


const Home = (props) => {

  return (
    <React.Fragment>
      <div className={classes['main-image']}>
        <img src={shopImg} alt="Shop Image" />
      </div>

      <main>
      <Products />
      </main>
    </React.Fragment>
  );
};

export default Home;