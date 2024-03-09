import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
 
const SearchComponent = () => {
    return (
        <div className="search">
            <input type="text"></input>
            <button>Search</button>
        </div>
    )
}

const Body = () => {

    useEffect(() => {
        console.log("useeffect called")
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.6244806999999&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        //Optional Chaining
        let restaurantList = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // restaurantList = restaurantList.concat(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(restaurantList);
        setFilteredListOfRestaurants(restaurantList);

    };

    // Whenever state variables update, React triggers a reconciliation cycle (re-renders the component)
    // State variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    let [searchText, setSearchText] = useState("");

    // Conditional Rendering
    // if(listOfRestaurants.length === 0) {
    //     return (<Shimmer/>)
    // }

    // Conditional Rendering via Ternary operator
    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
           <div className="search">
            <input type="text" value={searchText} onChange={(e)=> setSearchText(e.target.value)}></input>
            <button onClick={() => {
                setFilteredListOfRestaurants(listOfRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())))}}>Search</button>
        </div>
            <div className="filter"> 
            
            <button className="filter-button" 
            onClick={(e)=>{
                setFilteredListOfRestaurants(listOfRestaurants.filter((restaurant) => restaurant.info.avgRating >= 4.5));
            }}>Top rated Restaurants</button>
            <button className="filter-button" 
            onClick={(e)=>{setFilteredListOfRestaurants(listOfRestaurants); setSearchText("");
            }}>All Restaurants</button>
        </div> 
            <div className="restaurant-container">
                {filteredListOfRestaurants.map((restaurant) => <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id} ><RestaurantCard restaurantDetails={restaurant}/></Link>
                )}
        </div>
        </div>
    )
}

export default Body;