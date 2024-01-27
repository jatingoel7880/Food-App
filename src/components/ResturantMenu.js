import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";


const ResturantMenu=()=>{

    const {resId}= useParams();

    const resInfo=useResturantMenu(resId);
    //created this custom hook and gives us the resInfo and ResturantMenu did not have to worry about how this is fetching the data and
    //don't have this useEffect and fetchMenu logic. Tyring to abstract the fetch data logic and put inside this hook. ResturantMenu does not have to worry about
    //how to fetch the data it is just have to worry about that this is the resInfo and got the resturant data inside it and want to display it. and doesnt have to manage its own state.
    //fetching the data and give it to ResturantMenu and know this is a single responsibilty principle for displaying the value on the UI.
    //Resturant information into my component. resID for a particular resturant want the resturant menu.
    //how to get the data is abstracted concren is only to displat the data

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