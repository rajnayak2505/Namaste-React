import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({data, showItems, setShowIndex, dummyData}) => {
    // console.log(data)

    // const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        setShowIndex()
    }

    return(
        <div>
            <div className="flex justify-between my-4 cursor-pointer w-full bg-gray-50 shadow-lg p-4" onClick={handleClick}>
                <div className="">{data?.title} ({data?.itemCards.length})</div>
                <span> {showItems ? "🔼" : "🔽"}</span>
            </div>
            {/* <div className=" text-left">
                {data?.itemCards.map((item) => <div>{item.card.info.name}</div>)}
                {data?.itemCards.map((item) => <img className=" w-5 " src={REST_IMG_CDN+"/"+item.card.info.imageId}/>)}
            </div> */}
            {showItems && <ItemList key={data.itemCards.id} items={data.itemCards} dummyData={dummyData}/>}
        </div>
    );
};

export default RestaurantCategory;

// data?.itemCards.info.name