import { Link } from "react-router-dom";
import { REST_IMG_CDN } from "../utils/constants";

const RestaurentCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name, cuisines, avgRating, id} = resData?.info; // optional chaining and destructiong
    // console.log(resData)
    return(
        // <Link to={`restaurants/${id}`}>
            <div className="res-card">
                <img src={REST_IMG_CDN+"/"+cloudinaryImageId}></img>
                <h3>{name}</h3>
                <h4>{cuisines.join(',')}</h4>
                <h5>{avgRating} ★</h5>
            </div>
        // </Link>
    )
}
export default RestaurentCard;