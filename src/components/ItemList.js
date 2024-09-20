import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import {REST_IMG_CDN} from "../utils/constants"


const ItemList = ({items, dummyData}) => {
    // console.log("items",items)
    // console.log(dummyData)

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Disptach an action 
        dispatch(addItem(item))
    }

    return(
        <div>
            {items.map((item) => (
                <div className="flex text-left justify-between align-middle my-2 " key={item.card.info.id} >
                    <div className="w-9/12">
                        <h1 className="font-bold text-lg" >{item.card.info.name}</h1>
                        <h2 className="font-medium my-2" >₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</h2>
                        <p className="font-thin text-sm" >{item.card.info.description}</p>
                    </div>
                    <div className="w-2/12 relative">
                        <img className="w-36 h-36" src={REST_IMG_CDN+"/"+item.card.info.imageId}></img>
                        <button 
                            className="absolute bg-black z-10 text-white p-2 left-10 bottom-0 "
                            onClick={() => handleAddItem(item)}
                        >Add +</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;

// 1:03