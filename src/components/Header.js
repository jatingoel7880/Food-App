import { LOGO_URL } from "../utils/constant";
import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  //reading the context
  const {loggedInUser}=useContext(UserContext);

  //Reading of the store  
  //Selector :- it is a hook 
  //Subscribing to the store using Selector
  const cartItems=  useSelector((store)=> store.cart.itemss);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : " 🛑"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4  font-semibold">
          <Link to="/cart">🛒 {cartItems.length} items</Link>
          </li>
          
          <button
            className="login" 
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
