import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
    //whatever pass inside the addItem should go inside the cart
    //whatever passed inside this action will go the reducer function action and that to inside the payload
    //whenever call/(disptach this action) this addItem() it  will create an object and t will create a
    //payload inisde that object and it will add whatever data is data to the object. It will this object that it will pass the object
    //as a second argument  as action in cartSlice.
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold ">{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-2">
            <div className="absolute">
              <button
                className="p-2 mx-7 rounded-lg bg-black text-white shadow-lg"
                //onClick={handleAddItem}
                onClick={()=>handleAddItem(item)}
              >
                Add +
              </button>
            </div>

            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-[100px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
