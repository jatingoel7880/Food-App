import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";

import {useNavigate} from "react-router-dom";
import { clearCart } from "../utils/cartSlice";
import Body from "./Body";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.itemss);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/");
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <button  className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClick}> Add Food +</button>
        {cartItems.length===0 && <h1>Cart is Empty. Please Add Your Favourite Food😋😋.</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
