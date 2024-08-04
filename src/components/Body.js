import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const Body = () => {
    const [listOfRestaurents, setLisOfRestaurents] = useState([]);
    const [filterRestaurents, setFilterRestaurents] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0693128&lng=72.842814&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setLisOfRestaurents(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestaurents(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };



    return listOfRestaurents.length === 0 ? <Shimmer/> : (
        <div className="wrapper">
            <div className="filter-wrap">
                <div>
                    <input type="text"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                        console.log(e.target.value)
                    }}
                    />
                    <button className="search-btn"
                    onClick={() => {
                        setSearchText(searchText)
                        // console.log(searchText)
                        const filteredRestaurents = filterRestaurents.filter(
                            (res) => res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
                        );
                        setLisOfRestaurents(filteredRestaurents)
                    }}>Search</button>
                </div>
                <button className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurents.filter(
                        (res) => res.info.avgRating > 4.2
                    );
                    setLisOfRestaurents(filteredList)
                }}>Top Rated Restaurents</button>
            </div>
            <div className="res-container">
                {/* <RestaurentCard resData={resList[0]} /> */}
                {
                    listOfRestaurents.map((restaurent) =>
                   <Link to={`restaurants/${restaurent.info.id}`}> <RestaurentCard key={restaurent.info.id} resData={restaurent}/> </Link>
                )
                }
            </div>
        </div>
    )
}
export default Body;