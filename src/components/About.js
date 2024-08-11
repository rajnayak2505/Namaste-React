import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//     return(
//         <div className="about">
//             <div>About Us page</div>
//             {/* <User name={"Rajesh from (class)"} location={"bombay"}/> */}
//             <UserClass name={"Rajesh from (class)"} location={"bombay"}/>
//         </div>
//     )
// };


class About extends React.Component {

    constructor(){
        super();
        console.log("parent constructor")
    }

    componentDidMount(){
        console.log("parent componetDidMount")
    }

    componentDidUpdate(){
        console.log("parent componetUpdateMount ")
    }

    render() {
        console.log("parent render")
        return(
            <div className="about">
                <div>About Us page</div>
                <UserClass name={"Rajesh from (class)"} location={"bombay"}/>
                {/* <UserClass name={"Rahul from (class)"} location={"bombay"}/> */}
            </div>
        )
    }
}


export default About;