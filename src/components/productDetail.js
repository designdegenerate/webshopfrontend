import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { IoMdStarOutline } from "react-icons/io";

const ProductDetail = (props) => {
  // const addToCart = () => {
  //   //   // check if product in the list
  //   //   // if in the list, raise amount by 1
  //   //   // if not in the list, amount should be set to 1
  //   const product = props.cart.find((item) => item.id === props.id);
  //   if (product) {
  //     props.setCart(
  //       props.cart.map((product) => {
  //         if (product.id === props.id) {
  //           return { ...product, amount: product.amount + 1 };
  //         }
  //         return { ...product, amount: 1 };
  //       })
  //     );
  //   }
  // };
  // console.log(props);
  // console.log(props.cart);

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
