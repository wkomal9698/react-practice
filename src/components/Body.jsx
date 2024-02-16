import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const SearchComponent = () => {
    return (
        <div className="search">
            <input type="text"></input>
            <button>Search</button>
        </div>
    )
}

const Body = () => {

    
    // Normal JS variable
    // let listOfRestaurants = [
    //     {
    //         "id": 193342343,
    //         "imgsrc": "https://www.curryflow.com/wp-content/uploads/2019/09/45626733_198715864384480_6178359071381402980_n-1.jpg",
    //         "resName": "KFC",
    //         "resCuisine": ["Burgers", "Biryani", "American", "Snacks", "Fast food"],
    //         "resRating": "3.8",
    //         "timeToDeliver": "42 MINS",
    //         "priceForTwo": 40000,
    //         "offer": "FREE DELIVERY"
    //     },
    //     {
    //         "id": 193312343,
    //         "imgsrc": "https://www.curryflow.com/wp-content/uploads/2019/09/45626733_198715864384480_6178359071381402980_n-1.jpg",
    //         "resName": "Dominos",
    //         "resCuisine": ["Pizza", "Burgers", "American", "Snacks", "Fast food"],
    //         "resRating": "4.8",
    //         "timeToDeliver": "30 MINS",
    //         "priceForTwo": 50000,
    //         "offer": "FREE DELIVERY"
    //     }
    // ];  

    // State variable - super powerful variable
    let [listOfRestaurants, setlistOfRestaurants] = useState(restaurantList);

    return (
        <div className="body">
            {/* <SearchComponent/> */}
            <div className="filter"> 
            <button className="filter-button" 
            onClick={(e)=>{
                setlistOfRestaurants(listOfRestaurants.filter((restaurant) => restaurant.resRating >= 4.0));
                console.log("list filtered:: ", listOfRestaurants);
            }}>Top rated Restaurants</button>
        </div> 
            <div className="restaurant-container">
                {console.log("list before:: ", listOfRestaurants)}
                {listOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurantDetails={restaurant}/>
                )}
                {console.log("list after:: ", listOfRestaurants)}
        </div>
        </div>
    )
}

export default Body;