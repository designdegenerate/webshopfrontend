import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import Homepage from "./pages/Homepage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <main className="App">
      <NavBar />
      <article>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route
            path="/details/:id"
            element={
              <ProductDetailPage cartGetter={cart} cartSetter={setCart} />
            }
          />
        </Routes>
      </article>
    </main>
  );
}

export default App;
