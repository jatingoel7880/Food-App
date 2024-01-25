import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const ResturantMenu=()=>{

    const[resInfo, setResInfo]=useState(null);

    const {resId}= useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async()=>{
        const data=await fetch(MENU_API+ resId);
        const json=await data.json();

        setResInfo(json.data);
    };

    if (resInfo===null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage }= resInfo?.cards[0]?.card?.card?.info;
   
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

    
    return(
        <div className="menu">
            <h1>{ name}</h1>
            <p>{cuisines.join(", ")}- {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
            {itemCards.map((item)=>(
            <li key={item.card.info.id}>
            { item.card.info.name} - {"Rs."}{ item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
            ))}
            </ul>
        </div>
    )
}

export default ResturantMenu;

//using the same component to load the data dynamically for every resturant 
//know need to load this component on a specific route 
//to creating a routing  path in appLayout (root file)
//loading the actual data through the api 
//when this page loads make an api call