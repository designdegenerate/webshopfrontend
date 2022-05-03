import { Link } from "react-router-dom";

const ProductCard = (props) => {
  console.log(props.details);
  const {id, title, mainImage, price, rating, description} = props.details;
  return (
    <div key={id} id={id} className="productCard">
      <img height="300" width="300" alt="" src={mainImage}></img>
      <div className="productCardContent">
        <Link to={"/details/" + id}><h2>{title}</h2></Link>
        <div>
          <p>€{price}</p>
          <p>{rating}</p>
        </div>
        <p>
          {description}
        </p>
        <div>
          <p>AddToCart</p>
          <p>Favorite</p>
          <p>Zoom</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
