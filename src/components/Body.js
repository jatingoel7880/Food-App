import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{


    //const [listOfResturants, setListOfResturant]=useState(resList)
    //know not using the mockData b/c using the live swiggy api for fetching and accessing the data 
    const [listOfResturants, setListOfResturant]=useState([])
    const [filtertedResturant, setFilteredResturant]=useState([]);
 

    const [searchText, setSearchText]=useState("");

    //Whenever state variable update, react triggers a reconciliation cycle(re-renders the component )
    console.log("Body Rendered");

    useEffect(()=>{fetchData()},[]);

    const fetchData=async()=>{

        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.843776&lng=80.914423&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json=await data.json();

    // console.log(json);
    //this is not a good away to access and handling the data. Know using the optional chaining for that
    // setListOfResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    //Optional Chaining:- Syntax:- ?. 
    setListOfResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //when fetching data making a copy of listOfResturant as well as filteredResturant 
    setFilteredResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
} //but will use listOfResturants to filter and update the data but for displaying using filteredResturant

//Conditional Rendering 
// if(listOfResturants.length===0){
//     return <Shimmer/>;
// }



    return listOfResturants.length===0 ? <Shimmer/>:(
        <div className="body">
            <div className="filter">
            <div className="search">
            <input type="text" className="search-box" 
            value={searchText} onChange={(e)=>{setSearchText(e.target.value);
            //for input box to work need to tied the value with the local state variable
            {/* in this input box value is tied to searchText and whenever something changes inside this input box we want to update searchText  */}
            }}/>
           
            <button onClick={()=>
            {
                const filtertedResturant=listOfResturants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                //filter the resturant cards and update the UI
                //to track the value of the user input box to get that value then have to bind this value with the local state variable (eearchText, setSearchText)
            
            // setListOfResturant(filtertedResturant); not using this statement b/c made the copy of original and setting that copy data to prevent from making changes in original data 
            setFilteredResturant(filtertedResturant);//setFilteredResturant is the copy data of the original data setListOfResturant
            console.log(searchText);
            }}>Search</button>

            </div>
            <button className="filter-btn" 
            onClick={()=>{
               const filteredList=listOfResturants.filter((res)=>res.info.avgRating > 4.3);
             //  setListOfResturant(filteredList);
             //using setFilteredResturant b/c the value is setting to filteredResturant (copy data) and mapping over the values in this.
             setFilteredResturant(filteredList);
               
            }}>Top Rated Resturants</button>
            </div>
            
            <div className="res-container">

             {/* listOfResturants.map((resturant)=>  rendering with the filteredResturant copy data  */}

            {filtertedResturant.length === 0 ? (
          <p>Sorry, not found</p>) : 
          (
          filtertedResturant.map((restaurant) => (
            <ResturantCard key={restaurant.info.id} resData={restaurant} />))
        )}
    
         
            </div>
        </div>
    );
}
    

export default Body;