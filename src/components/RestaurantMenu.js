import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react";

const RestaurantMenu = () => {

    //e.g of props drilling: usig dummy data for props drilling
    const dummyData = "Dummy Data"

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex,setShowIndex] = useState(0)
    
    if(resInfo == null) return  <h1 className="menu-loader">Let's order something you crave...</h1>
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    // console.log(itemCards)
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log("cate",categories)



    return (
        <div className="menu text-center m-10 ">
            <h1 className="text-3xl font-bold">{name}</h1>
            <h2 className="text-xl">{cuisines.join(',')}</h2><br></br>
            <div>
                {/* {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)} */}
                {categories.map((category,index) => (
                    <RestaurantCategory key={index} data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)}  dummyData={dummyData}/>
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu;