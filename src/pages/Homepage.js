import ProductList from "../components/home/ProductList";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import Footer from "../components/footer";
import Topsection from "../components/topSection";
import CategoryFilterLi from "../components/home/CategoryFilterLi";
import RatingsFilterLi from "../components/ratingsFilterLi";

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
  const [getRatingFilter, setRatingFilter] = useState([
    {
      stars: 0,
      checked: true,
    },
    {
      stars: 1,
      checked: false,
    },
    {
      stars: 2,
      checked: false,
    },
    {
      stars: 3,
      checked: false,
    },
    {
      stars: 4,
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

  const updateRatingFilter = (stars) => {
    //Mark the checkbox on/off
    const updatedArray = getRatingFilter.map((rating) => {
      if (rating.stars === stars) {
        return {
          ...rating,
          checked: true,
        };
      }
      return {
        ...rating,
        checked: false,
      };
    });

    setRatingFilter(updatedArray);
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
          <div>
            <h2>Rating</h2>
            <ul className="ratingsSidebar">
              {getRatingFilter.map((rating) => {
                return (
                  <RatingsFilterLi
                    key={rating.stars}
                    checked={rating.checked}
                    callbackfn={updateRatingFilter}
                    value={rating.stars}
                  />
                );
              })}
            </ul>
          </div>
        </section>
        <ProductList
          ratings={getRatingFilter}
          filter={getCatFilters}
          products={getProducts}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
