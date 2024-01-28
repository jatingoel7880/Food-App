import { CDN_URL } from "../utils/constant";

const ResturantCard=(props)=>{
    const {resData}=props;
  
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla}= resData?.info;
    // resData?.data;
    return(
        <div className="m-2 p-4 w-[190px] rounded-lg bg-gray-100 hover:bg-gray-500" >
       <img
        className="rounded-lg w-[190px] h-[120px] object-cover "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId }
       />
       <h3 className="font-bold py-4 text-lg">{name}</h3>
       <h4>{cuisines.join(", ")}</h4>
       <h4>{avgRating} star</h4>
       <h4>{costForTwo}</h4>
       <h4>{sla?.slaString}</h4>
        </div>
    )
  }

  export default ResturantCard;