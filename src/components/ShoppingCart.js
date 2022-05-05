import Footer from "./footer";
const ShoppingCart = ({ cart, removeFromCart, addToCart }) => {
  const getCart = Object.values(cart);
  const productsIds = getCart.map((p) => p.id);
  //   console.log("product id", productsIds);
  const filteredCart = getCart.filter((p) => productsIds.includes(p.id));
  //   console.log("filteredcart", filteredCart);
  //turn object to the array
  // {7: 12, 5: 3}
  // [{id: 7, amount: 12}]
  // const productsIds = [7, 5, ...]
  // products.filter(product => proudcts.ids.includes(product.id))

  //   console.log(cart);

  return (
    <>
      <div className="shopping-cart">
        <h2>Shopping cart</h2>
        <h3>Product</h3>
        {filteredCart
          ? filteredCart.map((item) => (
              <div className="shoppingCart-content">
                {
                  <img
                    className="shopping-cart-image"
                    src={item.image.props.src}
                    alt="img"
                  />
                }
                <div className="product-detail">
                  <p>{item.title}</p>
                  <p>Price: €{item.price}</p>
                  <p>Quantity: {item.amount}</p>
                  <p>
                    Total: €{parseFloat(item.price * item.amount).toFixed(2)}
                  </p>
                  <div
                    className="shoppingcart-button"
                    style={{ display: "flex" }}
                  >
                    <button onClick={() => removeFromCart(item.id)}>-</button>
                    {item.amount || 1}
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                </div>
              </div>
            ))
          : []}
      </div>
      <Footer />
    </>
  );
};
export default ShoppingCart;
