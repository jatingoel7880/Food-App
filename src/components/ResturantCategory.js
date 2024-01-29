import { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({ data, showItems }) => {
  // const [showItems, setShowItems]=useState(false);

  // const handleClick=()=>{
  //   setShowItems(!showItems);
  // }
  //Not will be using the state to show the list of the menu. b/c it gives the control and state
  //to each of the category in the list. For doing expanding and closing the rest of the accoridan list have
  //to give the power to the parent class i.e, ResturantMenu.
  //there are terms as Controlled and Uncontrolled components in react. so know this resturant category is a controlled component.
  //b/c Resturant Menu i.e parent controlling the Resturant Category
  //When using the state variable then it was a uncontrolled component
  return (
    <div>
      {/* Header*/}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordian body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResturantCategory;
