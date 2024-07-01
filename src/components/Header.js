import { useState } from "react";

const Header = () => {

    const [btn, setBtn] = useState("Login");

    return(
        <div className="header">
            <div className="logo">
                LOGO
                <img src=""></img>
            </div>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
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