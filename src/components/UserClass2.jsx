import React from "react";

class UserClass2 extends React.Component {

    constructor(props) {
        // console.log(props.name , "CONSTRUCTOR")
        super(props);
        this.state = {
            count: 0
        };
    }

    componentWillMount () {
        // console.log(this.props.name , "WILL MOUNT")
    }

    componentDidMount () {
        // console.log(this.props.name , "DID MOUNT")
    }

    componentDidUpdate() {
        // console.log(this.props.name , "DID UPDATE")
    }

    componentWillUpdate() {
        // console.log(this.props.name , "WILL UPDATE")
    }

    componentWillUnmount() {
        // console.log(this.props.name , "WILL UNMOUNT")
    }

    componentDidCatch() {
        // console.log(this.props.name , "DID CATCH")
    }

    render() {
        // console.log(this.props.name , "RENDER")

        const {name, location, contact} = this.props;
        return (
            <div className="user-card">
                <h4>Count: {this.state.count}</h4>
                <button onClick={() => {this.setState(
                {
                    count: this.state.count + 1
                }
                )}}>Count increase</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {contact}</h4>
        </div>
        )
    }
}

export default UserClass2;