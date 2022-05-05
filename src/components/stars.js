import { FaStar } from "react-icons/fa";
function Star({ filled }) {
  return <FaStar color={filled ? "orange " : "lightgray"} />;
}
export default Star;
