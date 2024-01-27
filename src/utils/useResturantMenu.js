import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";

const useResturantMenu=(resId)=>{

    const [resInfo, setResInfo]=useState(null);

    //fetch data 
     useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async()=>{
        const data=await fetch(MENU_API+ resId);
        const json=await data.json();

        setResInfo(json.data);
    };

    return resInfo;
    //need to return this data through resInfo and resInfo is a local variable for his hook
};

export default useResturantMenu;