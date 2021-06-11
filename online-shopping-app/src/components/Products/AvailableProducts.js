import {useEffect, useState} from 'react';
import Card from "../UI/Card/Card";
import classes from "./AvailableProducts.module.css";
import Product from "./ShoppingItem/Product";

const AvailableProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)


  useEffect(() => {
    const fetchProducts = async() => {
      const response = await fetch('https://react-http-demo-b33f6-default-rtdb.firebaseio.com/products.json');
      if (!response.ok) {
        throw new Error('Something went wrong!!')
      }
      const productData = await response.json();

      const loadedProducts = [];

      for ( const key in productData) {
        loadedProducts.push({
          id: key,
          name: productData[key].name,
          description: productData[key].description,
          price: productData[key].price,
          imgUrl: productData[key].img,
        })
      }
      setProducts(loadedProducts);
      setIsLoading(false);
    };

      fetchProducts().catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  if(isLoading) {
    return(
      <section className={classes.ProductLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  if(error) {
    return(
      <section className={classes.ProductError}>
        <p>{error}</p>
      </section>
    )
  }

  const productsList = products.map((product) => (
    <Card className={classes.card}>
      <Product
        key={product.id}
        productName={product.name}
        description={product.description}
        price={product.price}
        img={product.imgUrl}
      ></Product>
    </Card>
  ));
  return (
    <section className={classes.products}>
      <ul>{productsList}</ul>
    </section>
  );
};

export default AvailableProducts;
