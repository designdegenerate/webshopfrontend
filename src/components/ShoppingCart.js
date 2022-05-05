import { useEffect, useState } from "react";
import Footer from "./footer";
const ShoppingCart = ({ cart }) => {
  const [productsInCart, setProductsInCart] = useState([]);

  const getCart = Object.values(cart);
  const productsIds = getCart.map((p) => p.id);
  console.log("product id", productsIds);
  const filteredCart = getCart.filter((p) => productsIds.includes(p.id));
  console.log("filteredcart", filteredCart);

  useEffect(() => {
    //turn object to the array
    // {7: 12, 5: 3}
    // [{id: 7, amount: 12}]
    // const productsIds = [7, 5, ...]
    // products.filter(product => proudcts.ids.includes(product.id))
  }, []);
  //   console.log(cart);

  return (
    <div className="shopping-cart">
      <h2>Shopping cart</h2>
      {filteredCart
        ? filteredCart.map((item) => (
            <div>
              <p>{item.title}</p>
              <p>Price:{item.price}</p>
              {
                <img
                  className="shopping-cart-image"
                  src={item.image.props.src}
                  alt="img"
                />
              }
              <p>Quantity:{item.amount}</p>
              <p>Total:{item.price * item.amount}</p>
            </div>
          ))
        : []}

      <Footer />
    </div>
  );
};
export default ShoppingCart;
