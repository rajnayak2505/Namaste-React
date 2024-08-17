import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {

    const [btn, setBtn] = useState("Login");
    const onlineStatus = useOnlineStatus(true)

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
                <li><Link to="/cart">cart</Link></li>
                <button onClick={
                    () => {
                        btn === "Login" ? setBtn("Logout") : setBtn("Login");
                    }
                }>{btn}</button>
            </ul>
        </div>
    )
}
export default Header;