import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ProductDetail from "../components/productDetail";
import LowerSlice from "../components/lowerSliceDetail";
import Topsection from "../components/topSection";
import Footer from "../components/footer";
const ProductDetailPage = (props) => {
  const params = useParams();
  const [getProduct, setProduct] = useState([null]);

  useEffect(() => {
    const FetchData = async () => {
      const response = await axios.get(
        `http://localhost:4000/products/${params.id}`
      );
      console.log(response.data);
      setProduct(response.data);
    };
    FetchData();
  }, []);

  return (
    <>
      <Topsection />
      {getProduct ? (
        <ProductDetail
          key={getProduct.id}
          id={getProduct.id}
          title={getProduct.title}
          image={<img src={getProduct.mainImage} alt="img" />}
          price={getProduct.price}
          rating={getProduct.rating}
          category={getProduct.categorie?.title}
          cart={props.cart}
          // setCart={props.setCart}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
        />
      ) : (
        <p>Loading...</p>
      )}
      <LowerSlice key={getProduct.id} description={getProduct.description} />
      <Footer />
    </>
  );
};

export default ProductDetailPage;
