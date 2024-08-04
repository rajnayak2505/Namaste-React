import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    // console.log(resId)

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async() => {
        const menuData = await fetch(RESTAURANT_MENU_API+resId)
        const jsonData = await menuData.json()

        // console.log(jsonData.data)
        setResInfo(jsonData.data);
    };
    if(resInfo == null) return  <h1>Loading</h1>
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    // console.log(itemCards)

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(',')}</h2><br></br>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;