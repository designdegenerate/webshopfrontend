import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import Homepage from "./pages/Homepage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    // we have a product
    // check if product exist (by id)
    // if there, don't change it, just add +1 to amount
    // if not there, add it to the list with amount 1

    const newCart = { ...cart };

    if (!cart[product.id]) {
      newCart[product.id] = {
        ...product,
        amount: 1,
      };
      setCart(newCart);
      return;
    }

    newCart[product.id] = {
      ...product,
      amount: newCart[product.id].amount + 1,
    };
    setCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = { ...cart };

    console.log({ cart: cart[id], id });

    if (newCart[id].amount === 1) {
      delete newCart[id];
      console.log({ newCart });
      setCart(newCart);
      return;
    }
    newCart[id].amount = newCart[id].amount - 1;
    setCart(newCart);
  };

  const totalAmount = Object.values(cart).reduce((acc, cartItem) => {
    return cartItem.amount + acc;
  }, 0);

  return (
    <main className="App">
      <NavBar amount={totalAmount} />
      <article>
        <Routes>
          <Route
            path="/Cart"
            element={
              <ShoppingCart
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          ></Route>
          <Route path="/" element={<Homepage />}></Route>
          <Route
            path="/details/:id"
            element={<ProductDetailPage cart={cart} addToCart={addToCart} />}
          />
        </Routes>
      </article>
    </main>
  );
}

export default App;
