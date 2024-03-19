import React from "react";
import UserClass2 from "./UserClass2";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                company: "@default"
            }
        }
    }

    // componentWillMount () {
    //     console.log(this.props.name , "WILL MOUNT")
    // }

    async componentDidMount () {
        // console.log(this.props.name , "DID MOUNT")
        const data = await fetch("https://api.github.com/users/wkomal9698");
        const json = await data.json();
        // console.log("did mount:: ", json)

        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props.name , "DID UPDATE")
        // Below code is used to perform action only when a certain state or variable changes
        // just like useEffect with dependency array [count, count2]
        // Hence dependency array is an array because we can have an action to be performed when either values from dependency array changes
        if(this.state.count !== prevState.count || this.state.count2 !== prevState.count2) {

        }
    }

    // componentWillUpdate() {
    //     console.log(this.props.name , "WILL UPDATE")
    // }

    // componentWillUnmount() {
    //     console.log(this.props.name , "WILL UNMOUNT")
    // }

    // componentDidCatch() {
    //     console.log(this.props.name , "DID CATCH")
    // }

    render() {
        const {name, location, company, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <div>Logged In User: <UserContext.Consumer>{(userData) => <span>{userData.loggedInuser}</span>}</UserContext.Consumer></div>
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Company: {company}</h4>
                {/* <UserClass2 name={"USER CLASS 2"} location={location} contact={contact}/> */}
        </div>
        )
    }
}

export default UserClass;