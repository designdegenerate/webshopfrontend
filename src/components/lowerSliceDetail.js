import { useState } from "react";

const LowerSlice = (props) => {
  const [selected, setSelected] = useState("");
  return (
    <div className="lowerSlice">
      <div className="detail-options">
        <button onClick={() => setSelected("Description")}>Description</button>
        <button onClick={() => setSelected("Additional")}>
          Additional Info
        </button>
        <button onClick={() => setSelected("Reviews")}>Reviews</button>
      </div>
      <div className="detail-content">
        {selected === "Description" ? <p>{props.description}</p> : <></>}
        {selected === "Additional" ? <p>Additional</p> : <></>}
        {selected === "Reviews" ? <p>Reviews</p> : <></>}
      </div>
    </div>
  );
};
export default LowerSlice;
