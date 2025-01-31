import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
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
          <li className="px-4" text-lg>
            <Link to="contact">Contact Us</Link>
          </li>
          <li className="px-4 text-lg">Cart</li>
          <li className="px-4 text-lg">
            <Link to="/grocery text-lg">Grocery</Link>
          </li>
          <button
            className="login px-4 text-lg"
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
