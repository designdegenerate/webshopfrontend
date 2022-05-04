import ProductList from "../components/home/ProductList";
import axios from "axios";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [getProducts, setProducts] = useState([]);
  const [getCatFilters, setCatFilters] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response;
      try {
        response = await axios.get("http://localhost:4000/products");
      } catch (error) {
        console.log(error);
      }
      setProducts(response.data);
    };
    getData();
  }, []);

  const filterProducts = (cat) => {
    //Check whether category exists in array,
    //if it exists, remove it.

    //Otherwise, add it to the array

    //Then, filter using that contents
    const filtered = getProducts.filter((prod) => {
      return prod.categoryId === cat;
    });

    setProducts(filtered);
  };

  return (
    <article id="homePage">
      <section className="sidebar">
        <div>
          <h2>Categories</h2>
          <ul>
            <li>
              <input
                id="catElectronics"
                type="checkbox"
                onChange={() => {
                  filterProducts(1);
                }}
              ></input>
              <label for="catElectronics">Electronics</label>
            </li>
            <li>
              <input
                id="catJewelery"
                type="checkbox"
                onChange={() => {
                  filterProducts(2);
                }}
              ></input>
              <label for="catJewelery">Jewelery</label>
            </li>
            <li>
              <input id="catMenClothing" type="checkbox"></input>
              <label for="catMenClothing">Men's Clothing</label>
            </li>
            <li>
              <input id="catWomenClothing" type="checkbox"></input>
              <label for="catWomenClothing">Women's Clothing</label>
            </li>
          </ul>
        </div>
        <div>
          <h2>Rating</h2>
          <ul>
            <li>five stars</li>
            <li>four stars</li>
            <li>three stars</li>
            <li>two stars</li>
            <li>one star</li>
          </ul>
        </div>
      </section>
      <ProductList products={getProducts} />
    </article>
  );
};

export default Homepage;
