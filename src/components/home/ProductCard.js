import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BsZoomIn } from "react-icons/bs";
import StarRating from "../starRating";

const ProductCard = (props) => {
  const { id, title, mainImage, price, rating, description } = props.details;
  return (
    <div key={id} id={id} className="productCard">
      <div className="imgWrapper">
        <img height="300" width="300" alt="" src={mainImage}></img>
      </div>
      <div className="productCardContent">
        <Link to={"/details/" + id}>
          <h2>{title}</h2>
        </Link>
        <div className="priceRatingsWrapper">
          <p>€{price}</p>
          <p>
            Rating: <StarRating stars={rating} />
            {rating}
          </p>
        </div>
        <p className="description">{description}</p>
        <div className="cardButtons">
          <button>
            <FiShoppingCart />
          </button>
          <button>
            <FaRegHeart />
          </button>
          <button>
            <BsZoomIn />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
