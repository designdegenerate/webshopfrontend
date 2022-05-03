import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

const ProductDetail = (props) => {
  return (
    <>
      <div className="productCart">
        {props.image}
        <div className="productDetail">
          <h2>{props.title}</h2>
          <div className="review">
            <p>{props.rating}</p>
            <button className="review-button">Add review</button>
          </div>
          <p>€{props.price}</p>
          <div className="productCart-button">
            <button className="button-addToCart">
              <FiShoppingCart />
              Add to Cart
            </button>
            <button className="button-favorite">
              {" "}
              <FaRegHeart />
              Favorite
            </button>
          </div>
          <p>Categories: {props.category}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
