import { useState, useEffect } from "react"
import { APP_LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Logo = () => {
    return (
        <img className="logo" src={APP_LOGO_URL}></img>
    )
}

export const NavItems = () => {
    const onlineStatus = useOnlineStatus();
    const [isUserLoggedIn, setUserLoggedInState] = useState(false);

     // If no dependency array => useEffect is called on every render
     // If dependency array is empty = [] => useEffect is called on initial render
     // If dependency array is [isUserLoggedIn] => useEffect is called everytime isUserLoggedIn is updated
     useEffect(() => {
        console.log("useEffect called");
     }, [isUserLoggedIn]);

    return (
        <div className="nav-items">
            <ul className="ul-items">
                <li>Online Status: {onlineStatus?"✅":"🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li>Cart</li>
                <button className="login" onClick={() => setUserLoggedInState(!isUserLoggedIn)}>{isUserLoggedIn ? "Logout" : "Login"}</button>
            </ul>
        </div>
    )
}

const Header = () => {
    return (
        <div className="header">
            <Logo></Logo>
            <NavItems></NavItems>
        </div>
    )
}

export default Header;