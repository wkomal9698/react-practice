import { useState } from "react"
import { APP_LOGO_URL } from "../utils/constants"

const Logo = () => {
    return (
        <img className="logo" src={APP_LOGO_URL}></img>
    )
}

export const NavItems = () => {
    const [isUserLoggedIn, setUserLoggedInState] = useState(false);
    return (
        <div className="nav-items">
            <ul className="ul-items">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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