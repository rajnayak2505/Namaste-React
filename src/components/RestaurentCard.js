import { REST_IMG_CDN } from "../utils/constants";

const RestaurentCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name, cuisines, avgRating} = resData?.info; // optional chaining and destructiong
    // console.log(resData)
    return(
        <div className="res-card">
            <img src={REST_IMG_CDN+"/"+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h5>{avgRating} stars</h5>
        </div>
    )
}
export default RestaurentCard;