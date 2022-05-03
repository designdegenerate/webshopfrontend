import ProductList from "../components/home/ProductList";
import axios from "axios";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [ getProducts, setProducts ] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response;
      try {
        response = await axios.get(
          "http://localhost:4000/products"
        );
      } catch (error) {
        console.log(error);
      }
      setProducts(response.data);
    };
    getData();
  }, []);

  return (
    <article id="homePage">
      <section className="sidebar">
        <div>
          <h2>Categories</h2>
          <ul>
            <li>PrestaShop</li>
            <li>PrestaShop</li>
            <li>PrestaShop</li>
          </ul>
        </div>
        <div>
          <h2>Rating Item</h2>
          <ul>
            <li>five stars</li>
            <li>four stars</li>
            <li>three stars</li>
          </ul>
        </div>
      </section>
      <ProductList products={getProducts} />
    </article>
  );
};

export default Homepage;
