import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        // console.log(this.props.name,"child constructor")

        this.state = { // state in class components
            count : 0,
            count2 : 1,
        }
        this.state = {
            userInfo: {}
        }

        // we can use this typo also for putting dummy data 
        /*
        this.state = {
            avatar_url: "Dummy data",
            name: "Dummy data",
            login: "Dummy data",
            bio: "Dummy data",
            location: "Dummy data",
        }
        */
    }

    async componentDidMount(){
        // console.log(this.props.name, "child componetDidMount ")

        const data = await fetch("https://api.github.com/users/rajnayak2505");
        const jsonData = await data.json();
        // console.log(jsonData)
        this.setState({
            userInfo: jsonData
        })
    }

    componentDidUpdate(){
        // console.log(this.props.name, "child componetUpdateMount ")
    }

    componentWillUnmount(){
        // console.log(this.props.name, "child componentWillUnmount")
    }
    
    render() {
        // const {name, location} = this.props;
        const {count, count2} = this.state;
        // console.log(this.props.name, "chil render")

        // destructure
        const {avatar_url, name, login, bio, location} = this.state.userInfo;
        return (
            <>
            {/* <div className="userclass-card">
                Class Component
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    });
                }}>Increase</button>
                <h1>Count : {count}</h1>
                <h1>Count2 : {count2}</h1>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : 9000000000</h4>
            </div> */}
            <div className="userclass-card">
                <h1>Github Info</h1>
                <img src={avatar_url}/>
                <h2>Name : {name}</h2>
                <h2>Username : {login}</h2>
                <h2>Bio : {bio}</h2>
                <h2>Location : {location}</h2>
            </div>
            </>

        
        );
    }
};

export default UserClass;

/*
---MOUNTING---

Constructor(Dummy data)
Render(Dummy data)
        <HTML>
ComponetDidMount
        <API Call>
        <this.setState> -> variable is updated
---UPDATE---
    Render(API data)
    <HTML (new API data)>
    ComponentDidUpdate

--Once the this close componentWillUnmount will be called
ComponentWillUnmount
*/
