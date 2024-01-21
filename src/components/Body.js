import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body=()=>{

    const [listOfResturants, setListOfResturant]=useState(resList)

 
    return(
        <div className="body">
            <div className="filter">
            <button className="filter-btn" 
            onClick={()=>{
               const filteredList=listOfResturants.filter((res)=>res.data.avgRating > 4);
               setListOfResturant(filteredList);
            }}>Top Rated Resturants</button>
            </div>
            <div className="res-container">
            {
                listOfResturants.map((resturant)=> 
                (<ResturantCard  key={resturant.data.id} resData={resturant}/>))
            }
        
            </div>
        </div>
    );
}


    

export default Body;