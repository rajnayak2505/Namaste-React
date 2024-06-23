import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";



const Body = () => {
    const  [listOfRestaurents, setLisOfRestaurents] = useState(resList);
    return(
        <div className="wrapper">
            <div className="search">Search Bar</div>
            <button className="filter-btn" 
            onClick={() => {
                const filteredList = listOfRestaurents.filter(
                    (res) => res.info.avgRating > 4
                );
                setLisOfRestaurents(filteredList)
                console.log(filteredList)
            }}>Top Rated Restaurents</button>
            <div className="res-container">
                {/* <RestaurentCard resData={resList[0]} /> */}
                {
                    listOfRestaurents.map((restaurent) => <RestaurentCard key={restaurent.info.id} resData={restaurent}/>)
                }
            </div>
        </div>
    )
}
export default Body;