import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btn, setBtn] = useState("Login");

    return(
        <div className="header">
            <div className="logo">
                LOGO
                <img src=""></img>
            </div>
            <ul>
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