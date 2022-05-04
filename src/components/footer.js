import { RiFacebookCircleLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialTwitterCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="footer">
      <p>TheShop</p>
      <div className="footer-content">
        <div>
          <p>Categories</p>
          <ul>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
        <div>
          <p>My Account</p>
          <ul>
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Order History</li>
            <li>Order Tracking</li>
          </ul>
        </div>
        <div>
          <p>Follow us</p>
          <RiFacebookCircleLine />
          <IoLogoInstagram />
          <TiSocialTwitterCircular />
        </div>
      </div>
    </div>
  );
};

export default Footer;
