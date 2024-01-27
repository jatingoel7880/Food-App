import { useState, useEffect} from "react";

const useOnlineStatus=()=>{

    const [onlineStatus, setOnlineStatus]=useState(true);

    useEffect(()=>{
        
        addEventListener("offline",(e)=>{
            setOnlineStatus(false);
        });
        addEventListener("online",(e)=>{
            setOnlineStatus(true);
        });
    },[]);

    return onlineStatus;
}

export default useOnlineStatus;