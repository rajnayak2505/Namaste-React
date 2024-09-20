import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/userContex";
import { useSelector } from "react-redux";

const Header = () => {

    const [btn, setBtn] = useState("Login");
    const onlineStatus = useOnlineStatus(true)
    
    // using for context 
    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser)

    // subcribing to the store using Selector

    const cartItems = useSelector((store) => store.cart.items)
    // console.log("cart",cartItems)

    return(
        <div className="header">
            <Link to="/">
                <div className="logo">
                    tomato
                </div>
            </Link>
            <ul>
                <li>Online Status <span>{onlineStatus? "🟢" : "🔴" }</span></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/cart">cart ({cartItems.length} items)</Link></li>
                <button onClick={
                    () => {
                        btn === "Login" ? setBtn("Logout") : setBtn("Login");
                    }
                }>{btn}</button>
                {/* e.g of context  */}
                <li className="text-sm text-gray-600">Hello! {loggedInUser}</li>
            </ul>
        </div>
    )
}
export default Header;