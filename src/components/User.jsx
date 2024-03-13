import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-card">
            <h4>Count: {count}</h4>
            <h4>Count2: {count2}</h4>
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.location}</h3>
            <h4>Contact: {props.contact}</h4>
        </div>
    );
};

export default User;