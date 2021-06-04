import React from 'react';
import shopImg from '../../assets/shop.jpeg';
import classes from './Home.module.css';


const Home = (props) => {

  return (
 <div className={classes['main-image']}>
<img src={shopImg} alt="Shop Image" />

</div>
  );
};

export default Home;