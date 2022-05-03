import { Link } from "react-router-dom";

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
          <p>Rating: {rating}</p>
        </div>
        <p className="description">{description}</p>
        <div className="cardButtons">
          <p>AddToCart</p>
          <p>Favorite</p>
          <p>Zoom</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
