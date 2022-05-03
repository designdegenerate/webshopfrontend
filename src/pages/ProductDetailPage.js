import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ProductDetail from "../components/productDetail";
const ProductDetailPage = () => {
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
  console.log(getProduct);

  return (
    <>
      {getProduct ? (
        <ProductDetail
          key={getProduct.id}
          title={getProduct.title}
          image={<img src={getProduct.mainImage} alt="img" />}
          price={getProduct.price}
          rating={getProduct.rating}
          description={getProduct.description}
          category={getProduct.categorie?.title}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductDetailPage;
