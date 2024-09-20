import RestaurentCard, {withPromotedLabel,isOpenLabel} from "./RestaurentCard";
import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContex";



const Body = () => {
    const [listOfRestaurents, setLisOfRestaurents] = useState([]);
    const [filterRestaurents, setFilterRestaurents] = useState([]);
    const [searchText, setSearchText] = useState("");

    // const RestaurantCardPromoted = withPromotedLabel(RestaurentCard)
    const OpenRestaurant = isOpenLabel(RestaurentCard)

    // context data for loggedIUserName
    const {loggedInUser, setUserName} = useContext(UserContext)

    // console.log(loggedInUser)
    
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
                    <input className=" border-solid border-2 border-black"
                    type="text"
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
                        (res) => res.info.avgRating > 4.1
                    );
                    setLisOfRestaurents(filteredList)
                }}>Rating 4+</button>
                <label>User Name : </label>
                <input className=" border border-black"
                    type="text"
                    value={loggedInUser}
                    onChange={(e) => {
                        setUserName(e.target.value)
                        // console.log(e.target.value)
                    }}
                />
            </div>
            <div className="res-container">
                {/* <RestaurentCard resData={resList[0]} /> */}
                {
                    listOfRestaurents.map((restaurent) =>
                   <Link
                     to={`restaurants/${restaurent.info.id}`}
                     key={restaurent.info.id}>
                        {
                            // But in this API we dont have promoted lable object
                            restaurent.info.isOpen ? ( <OpenRestaurant resData={restaurent}/>) : ( <RestaurentCard resData={restaurent}/> )
                        }
                    </Link>
                )
                }
            </div>
        </div>
    )
}
export default Body;