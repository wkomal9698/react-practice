import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items (Home, About us, Cart)
 * 
 * Body
 *  - Search
 *  - Restaurant Container
 *      - Restaurant Card
 *          - Image
 *          - Name
 *          - Cuisine
 *          - Star Rating, Time to delivery, Price for two
 *          - Offers
 * 
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 *  - Feedback
 */
const restaurantViews = [];
const Logo = () => {
    return (
        <img className="logo" src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"></img>
    )
}

const NavItems = () => {
    return (
        <div className="nav-items">
            <ul className="ul-items">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
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

const SearchComponent = () => {
    return (
        <div className="search">
            <input type="text"></input>
            <button>Search</button>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {imgsrc, resName, resCuisine, resRating, timeToDeliver, priceForTwo, offer} = props?.restaurantDetails;
    return (
        <div className="restaurant-card">
            <img className="restaurant-image" src={imgsrc}></img>
            <div className="restaurant-details">
                <div>
                <h1>{resName}</h1>
                <h5>{resCuisine.join(", ")}</h5>
            </div>
            <div className="restaurant-misc-details">
                <h4>{resRating}</h4>
                <h4>.</h4>
                <h4>{timeToDeliver}</h4>
                <h4>.</h4>
                <h4>Rs. {priceForTwo/100} FOR TWO</h4>
            </div>
            <div>
                <h6>{offer}</h6>
            </div>
            </div>
        </div>
    )
}

const RestaurantContainer = () => {
    
    const restaurantDetails = [
        {
            "id": 123342343,
            "imgsrc": "https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg",
            "resName": "Call me Chow",
            "resCuisine": ["Chinese", "Asian"],
            "resRating": "4.3",
            "timeToDeliver": "27 MINS",
            "priceForTwo": 40000,
            "offer": "40% off | Use SPECIALS"
        },
        {
            "id": 123342843,
            "imgsrc": "https://www.curryflow.com/wp-content/uploads/2019/09/45626733_198715864384480_6178359071381402980_n-1.jpg",
            "resName": "Meghana Foods",
            "resCuisine": ["Biryani", "Andhra", "South Indian", "North Indian", "Chinese", "Asian", "Seafood"],
            "resRating": "4.4",
            "timeToDeliver": "38 MINS",
            "priceForTwo": 50000,
            "offer": "FREE DELIVERY"
        },
        {
            "id": 123342743,
            "imgsrc": "https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg",
            "resName": "Kannur Food Point",
            "resCuisine": ["Kerala", "Chinese"],
            "resRating": "3.8",
            "timeToDeliver": "30 MINS",
            "priceForTwo": 30000,
            "offer": "FREE DELIVERY"
        },
        {
            "id": 193342343,
            "imgsrc": "https://www.curryflow.com/wp-content/uploads/2019/09/45626733_198715864384480_6178359071381402980_n-1.jpg",
            "resName": "KFC",
            "resCuisine": ["Burgers", "Biryani", "American", "Snacks", "Fast food"],
            "resRating": "3.8",
            "timeToDeliver": "42 MINS",
            "priceForTwo": 40000,
            "offer": "FREE DELIVERY"
        },
        {
            "id": 123322343,
            "imgsrc": "https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg",
            "resName": "Food Stop",
            "resCuisine": ["Kerala", "Chinese"],
            "resRating": "3.8",
            "timeToDeliver": "30 MINS",
            "priceForTwo": 30000,
            "offer": "FREE DELIVERY"
        },
        {
            "id": 123340343,
            "imgsrc": "https://www.curryflow.com/wp-content/uploads/2019/09/45626733_198715864384480_6178359071381402980_n-1.jpg",
            "resName": "Chings",
            "resCuisine": ["Chinese", "Asian"],
            "resRating": "4.3",
            "timeToDeliver": "27 MINS",
            "priceForTwo": 40000,
            "offer": "40% off | Use SPECIALS"
        },
        {
            "id": 183342343,
            "imgsrc": "https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg",
            "resName": "Hyderabadi Biryani",
            "resCuisine": ["Biryani", "Andhra", "South Indian", "North Indian", "Chinese", "Asian, Seafood"],
            "resRating": "4.4",
            "timeToDeliver": "38 MINS",
            "priceForTwo": 50000,
            "offer": "FREE DELIVERY"
        },
        {
            "id": 123342340,
            "imgsrc": "https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg",
            "resName": "Call me Chow",
            "resCuisine": ["Chinese", "Asian"],
            "resRating": "4.3",
            "timeToDeliver": "27 MINS",
            "priceForTwo": 40000,
            "offer": "40% off | Use SPECIALS"
        },
        {
            "id": 123342349,
            "imgsrc": "https://www.curryflow.com/wp-content/uploads/2019/09/45626733_198715864384480_6178359071381402980_n-1.jpg",
            "resName": "Meghana Foods",
            "resCuisine": ["Biryani", "Andhra", "South Indian", "North Indian", "Chinese", "Asian", "Seafood"],
            "resRating": "4.4",
            "timeToDeliver": "38 MINS",
            "priceForTwo": 50000,
            "offer": "FREE DELIVERY"
        },
        {
            "id": 123342341,
            "imgsrc": "https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg",
            "resName": "Kannur Food Point",
            "resCuisine": ["Kerala", "Chinese"],
            "resRating": "3.8",
            "timeToDeliver": "30 MINS",
            "priceForTwo": 30000,
            "offer": "FREE DELIVERY"
        },
        {
            "id": 123342313,
            "imgsrc": "https://www.curryflow.com/wp-content/uploads/2019/09/45626733_198715864384480_6178359071381402980_n-1.jpg",
            "resName": "KFC",
            "resCuisine": ["Burgers", "Biryani", "American", "Snacks", "Fast food"],
            "resRating": "3.8",
            "timeToDeliver": "42 MINS",
            "priceForTwo": 40000,
            "offer": "FREE DELIVERY"
        },
        {
            "id": 123342365,
            "imgsrc": "https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg",
            "resName": "Food Stop",
            "resCuisine": ["Kerala", "Chinese"],
            "resRating": "3.8",
            "timeToDeliver": "30 MINS",
            "priceForTwo": 30000,
            "offer": "FREE DELIVERY"
        },
        {
            "id": 123342873,
            "imgsrc": "https://www.curryflow.com/wp-content/uploads/2019/09/45626733_198715864384480_6178359071381402980_n-1.jpg",
            "resName": "Chings",
            "resCuisine": ["Chinese", "Asian"],
            "resRating": "4.3",
            "timeToDeliver": "27 MINS",
            "priceForTwo": 40000,
            "offer": "40% off | Use SPECIALS"
        },
        {
            "id": 123382343,
            "imgsrc": "https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg",
            "resName": "Hyderabadi Biryani",
            "resCuisine": ["Biryani", "Andhra", "South Indian", "North Indian", "Chinese", "Asian, Seafood"],
            "resRating": "4.4",
            "timeToDeliver": "38 MINS",
            "priceForTwo": 50000,
            "offer": "FREE DELIVERY"
        },
    ];

    return (
        <div className="restaurant-container">
            {/* {restaurantDetails.forEach((restaurant) => {
                console.log("resin loop::", restaurant);
                restaurantViews.push(<RestaurantCard restaurantDetails={restaurant}/>)})
                setRestaurantViews(restaurantViews)} */}
                {restaurantDetails.map((restaurant) => <RestaurantCard key={restaurant.id} restaurantDetails={restaurant}/>
                )}
            {/* <RestaurantCard restaurantDetails={restaurantDetails[0]}/>
            <RestaurantCard restaurantDetails={restaurantDetails[1]}/>
            <RestaurantCard restaurantDetails={restaurantDetails[2]}/>
            <RestaurantCard restaurantDetails={restaurantDetails[3]}/>
            <RestaurantCard restaurantDetails={restaurantDetails[4]}/>
            <RestaurantCard restaurantDetails={restaurantDetails[5]}/>
            <RestaurantCard restaurantDetails={restaurantDetails[6]}/> */}
            {/* <RestaurantCard></RestaurantCard>
            <RestaurantCard></RestaurantCard>
            <RestaurantCard></RestaurantCard>
            <RestaurantCard></RestaurantCard>
            <RestaurantCard></RestaurantCard> */}
        </div>
    )
}

const Body = () => {
    // const [restaurantViews, setRestaurantViews] = useState([]);
    return (
        <div className="body">
            <SearchComponent></SearchComponent>
            <RestaurantContainer>
                {/* {console.log("restaview::", restaurantViews)}
                {restaurantViews} */}
            </RestaurantContainer>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            footer
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);