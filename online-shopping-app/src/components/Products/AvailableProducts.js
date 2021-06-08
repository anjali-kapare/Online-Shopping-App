import Card from "../UI/Card/Card";
import classes from "./AvailableProducts.module.css";
import Product from "./ShoppingItem/Product";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Hand Bag",
    imgUrl:
      "https://assetscdn1.paytm.com/images/catalog/product/B/BA/BAGTHE-MINI-NEESWAB11614678F34BF84/1614419602428_0..jpg",
    description: "Extra Large Malnov Women’ s Tote Bag",
    price: 800.99,
  },
  {
    id: "p2",
    name: "Heels",
    imgUrl:
      "https://assets.ajio.com/medias/sys_master/root/20200923/Las3/5f6b6723aeb269d563c90e00/-473Wx593H-460729125-black-MODEL.jpg",
    description: "Fashion Tails Women Black Heels",
    price: 1200,
  },
  {
    id: "p3",
    name: "Wireless Headphones",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0003/7565/2399/products/1_6f1f0328-6ce7-4269-8fdf-4272e2ba01b3_800x.jpg?v=1615889632",
    description: "WH-74 Over The Ear Wireless Headphones With Mic & FM (Black)",
    price: 1199,
  },
];

const AvailableProducts = () => {
  const productsList = DUMMY_PRODUCTS.map((product) => (
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
