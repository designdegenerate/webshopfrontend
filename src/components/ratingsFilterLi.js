import ReactStars from "react-rating-stars-component";

const RatingsFilterLi = (props) => {
  return (
    <li>
      <input
        id={"rating" + props.value}
        key={props.value}
        type="radio"
        checked={props.checked ? true : false}
        onChange={() => {props.callbackfn(props.value)}}
      ></input>
      <label htmlFor={"rating" + props.value}>
        {props.value === 0 ? "All" 
        : 
        <ReactStars
          count={5}
          size={18}
          value={props.value}
          isHalf={true}
          edit={false}
          activeColor="#ffd700"
        />
        }
        
      </label>
    </li>
  );
};

export default RatingsFilterLi