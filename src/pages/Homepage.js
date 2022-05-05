import ProductList from "../components/home/ProductList";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../components/footer";
import Topsection from "../components/topSection";
import CategoryFilterLi from "../components/home/CategoryFilterLi";

const Homepage = () => {
  const [getProducts, setProducts] = useState([]);
  const [getCatFilters, setCatFilters] = useState([
    {
      id: 1,
      title: "Electronics",
      checked: false,
    },
    {
      id: 2,
      title: "Jewelry",
      checked: false,
    },
    {
      id: 3,
      title: "MensClothing",
      checked: false,
    },
    {
      id: 4,
      title: "WomensClothing",
      checked: false,
    },
  ]);

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

  const updateProductFilters = (id) => {
    //Mark the checkbox on/off
    const updatedArray = getCatFilters.map((category) => {
      if (category.id === id) {
        return {
          ...category,
          checked: !category.checked,
        };
      }
      return category;
    });

    setCatFilters(updatedArray);
  };

  return (
    <div id="homePage">
      <Topsection />
      <div id="homePageInner">
        <section className="sidebar">
          <div>
            <h2>Categories</h2>
            <ul>
              {getCatFilters.map((category) => {
                return (
                  <CategoryFilterLi
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    checked={category.checked}
                    callbackfn={updateProductFilters}
                  />
                );
              })}
            </ul>
          </div>
          {/* <div>
            <h2>Rating</h2>
            <ul>
              <li>five stars</li>
              <li>four stars</li>
              <li>three stars</li>
              <li>two stars</li>
              <li>one star</li>
            </ul>
          </div> */}
        </section>
        <ProductList 
          filter={getCatFilters} 
          products={getProducts}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
