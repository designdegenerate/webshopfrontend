const { Link } = require("react-router-dom");
const NavBar = () => {
  return (
    <nav>
      <div>
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
      </div>
      <input type="text"></input>
      <div><p>hello</p></div>
    </nav>
  );
};

export default NavBar;
