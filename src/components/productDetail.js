import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { IoMdStarOutline } from "react-icons/io";

const ProductDetail = (props) => {
  return (
    <>
      <div className="productCart">
        {props.image}
        <div className="productDetail">
          <h2>{props.title}</h2>
          <div className="review">
            <p className="rating">
              <div className="stars">
                <IoMdStarOutline /> <IoMdStarOutline /> <IoMdStarOutline />
              </div>{" "}
              {props.rating}
            </p>
            <button className="review-button">Add review</button>
          </div>
          <p>Price: €{props.price}</p>
          <div className="productCart-button">
            <button
              className="button-addToCart"
              onClick={() =>
                props.addToCart({
                  id: props.id,
                  image: props.image,
                  title: props.title,
                  rating: props.rating,
                  price: props.price,
                })
              }
            >
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
          <p className="share">
            Share: <RiFacebookCircleLine /> <IoLogoInstagram />{" "}
            <TiSocialTwitterCircular />
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
