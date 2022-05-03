import LowerSlice from "./lowerSliceofDetailPage";
const ProductDetail = (props) => {
  return (
    <>
      <div className="productCart">
        {props.image}
        <div className="productDetail">
          <h2>{props.title}</h2>
          <p>€{props.price}</p>
          <p>{props.rating}</p>
          <p>{props.description}</p>
          <p>Categories: {props.category}</p>
        </div>
      </div>
      <LowerSlice />
    </>
  );
};

export default ProductDetail;
