import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserConext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserConext);

  //subscribing to the store

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className=" m-4 p-4 header flex justify-between shadow-lg bg-yellow-50">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center ">
        <ul className="flex m-4 p-4  ">
          <li className="px-4 text-lg">Online: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 text-lg">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4 text-lg">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-lg" >
            <Link to="contact">Contact Us</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to="/cart">Cart-({cartItems.length})</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login px-4 text-lg"
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 text-lg">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
