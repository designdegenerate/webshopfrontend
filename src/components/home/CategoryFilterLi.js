const CategoryFilterLi = (props) => {

  return (
    <li>
      <input
        id={props.title}
        key={props.id}
        type="checkbox"
        checked={props.checked ? true : false}
        onChange={() => {props.callbackfn(props.id)}}
      ></input>
      <label htmlFor={props.title}>{props.title}</label>
    </li>
  );
};

export default CategoryFilterLi;