import { useState, useEffect, useContext } from "react"
import { APP_LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Logo = () => {
    return (
        <img className="w-28" src={APP_LOGO_URL}></img>
    )
}

export const NavItems = () => {
    const onlineStatus = useOnlineStatus();
    const [isUserLoggedIn, setUserLoggedInState] = useState(false);
    const userData = useContext(UserContext);
    console.log("User Data:: ", userData);

     // If no dependency array => useEffect is called on every render
     // If dependency array is empty = [] => useEffect is called on initial render
     // If dependency array is [isUserLoggedIn] => useEffect is called everytime isUserLoggedIn is updated
     useEffect(() => {
        console.log("useEffect called");
     }, [isUserLoggedIn]);

    return (
        <div className="flex items-conter">
            <ul className="flex p-4 m-4">
                <li className="p-4">Online Status: {onlineStatus?"✅":"🔴"}</li>
                <li className="p-4"><Link to="/">Home</Link></li>
                <li className="p-4"><Link to="/about">About Us</Link></li>
                <li className="p-4"><Link to="/contact">Contact Us</Link></li>
                <li className="p-4"><Link to="/grocery">Grocery</Link></li>
                <li className="p-4">Cart</li>
                <button className="p-4" onClick={() => setUserLoggedInState(!isUserLoggedIn)}>{isUserLoggedIn ? "Logout" : "Login"}</button>
                <li className="p-4 font-bold">{userData.loggedInuser}</li>
            </ul>
        </div>
    )
}

const Header = () => {
    return (
        <div className="flex justify-between bg-green-100 shadow-lg m-2 sm:bg-yellow-100 lg:bg-pink-100">
            <Logo></Logo>
            <NavItems></NavItems>
        </div>
    )
}

export default Header;