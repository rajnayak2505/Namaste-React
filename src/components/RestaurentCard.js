import { Link } from "react-router-dom";
import { REST_IMG_CDN } from "../utils/constants";
import { Component } from "react";

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
};

// Higher order Component
// - higher order component function that takes a component and return a component.
// - a component again JS fn. 
// - so it will return another comp.(new compp.) inside it. [promoted lable top of it]
// - enhanced version of compo. which takes new features [just like a lable]
// - when we write higher order compo. these higher order compo. are pure fns.
//   - pure fns. means that it will not chane any of its
//   - we will not modify the code of RestaurentCard / will not change behavior on this RestaurentCard. we are taking out as input and using exactly how we use RestaurentCard, we just enhacing the compo.
// But in this API we dont have promoted lable object
// we are going to use isOpne object instead of Label



// export const withPromotedLabel = (RestaurentCard) => {
//     return(props) => {
//         return(
//             <div>
//                 <label>Promoted</label>
//                 <RestaurentCard  {...props}/>
//             </div>
//         );
//     };
// };

export const isOpenLabel = (RestaurentCard) => {
    return(props) => {
        return(
            <div className="open-label">
                <label>Open</label>
                <RestaurentCard  {...props}/>
            </div>
        );
    };
};

export default RestaurentCard;