import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";


const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            {/* <ResturantCard resName="Meghana Foods" cuisine="Biryani,North Indian" rating="4.5"/> */}

            {
                resList.map((resturant)=> 
                (<ResturantCard  key={resturant.data.id} resData={resturant}/>))
            }
        
            </div>
        </div>
    );
}


    

export default Body;