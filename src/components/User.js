import { useState } from "react";

const User = (props) => {

    const [count, setCount] = useState(0)
    const [count2] = useState(2)
    return(
        <div className="user-card">
            Function Components
            <button onClick={() => {setCount(count+1)}}>Button {count}</button>
            <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>
            <h2>Name : {props.name}</h2>
            <h3>Location : {props.location}</h3>
            <h4>Contact : 9000000000</h4>
        </div>
    )
};

export default User;