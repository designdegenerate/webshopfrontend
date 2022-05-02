import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

const { Link } = require("react-router-dom");

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src="" alt="TheShop"></img>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <input type="text"></input>
      <div id="btnRow">
        <Link to="/User">
          <FaRegUser />
        </Link>
        <Link to="/Cart">
          <FiShoppingCart />
        </Link>
        <Link to="/Favorite">
          <FaRegHeart />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
