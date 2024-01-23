import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{


    //const [listOfResturants, setListOfResturant]=useState(resList)
    //know not using the mockData b/c using the live swiggy api for fetching and accessing the data 
    const [listOfResturants, setListOfResturant]=useState([])
 
    useEffect(()=>{fetchData()},[]);

    const fetchData=async()=>{

        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.843776&lng=80.914423&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json=await data.json();

    // console.log(json);
    //this is not a good away to access and handling the data. Know using the optional chaining for that
    setListOfResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    //Optional Chaining:- Syntax:- ?. 
    setListOfResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

//Conditional Rendering 
// if(listOfResturants.length===0){
//     return <Shimmer/>;
// }

    return listOfResturants.length===0 ? <Shimmer/>:(
        <div className="body">
            <div className="filter">
            <div className="search">
            <input type="text" className="search-box" value=""/>
            <button onClick={()=>{
                //filter the resturant cards and update the UI
                //to track the value of the user input to get that value then have to bind the value with the local state variable
            }}>Search</button>
            </div>
            <button className="filter-btn" 
            onClick={()=>{
               const filteredList=listOfResturants.filter((res)=>res.info.avgRating > 4);
               setListOfResturant(filteredList);
               
            }}>Top Rated Resturants</button>
            </div>
            <div className="res-container">
            {
                listOfResturants.map((resturant)=> 
                (<ResturantCard  key={resturant.info.id} resData={resturant}/>))
            }
        
            </div>
        </div>
    );
}
    

export default Body;