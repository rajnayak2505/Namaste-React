import { useEffect,useState } from "react";
import { RESTAURANT_MENU_API } from "../utils/constants";


const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [])
    
    const fetchMenu = async() => {
        const menuData = await fetch(RESTAURANT_MENU_API+resId)
        const jsonData = await menuData.json()
    
        // console.log(jsonData.data)
        setResInfo(jsonData.data);
    };
    return resInfo;
}

export default useRestaurantMenu;