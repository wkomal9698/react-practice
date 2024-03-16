import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
 
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

    if(useOnlineStatus() === false) {
        return <h1>Looks like you're offline. Please check your internet connection.</h1>
    }

    // Conditional Rendering via Ternary operator
    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex m-4"> 
           <div className="search p-4">
            <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=> setSearchText(e.target.value)}></input>
            <button className="px-4 py-2 bg-green-100 m-4 shadow-md rounded-xl" onClick={() => {
                setFilteredListOfRestaurants(listOfRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())))}}>Search</button>
        </div>
        
            <div className="search p-4 flex items-center">
            <button className="mx-4 px-4 py-2 bg-blue-100 shadow-md" 
            onClick={(e)=>{
                setFilteredListOfRestaurants(listOfRestaurants.filter((restaurant) => restaurant.info.avgRating >= 4.5));
            }}>Top rated Restaurants</button>
            <button className="mx-4 px-4 py-2 bg-blue-100 shadow-md" 
            onClick={(e)=>{setFilteredListOfRestaurants(listOfRestaurants); setSearchText("");
            }}>All Restaurants</button>
            </div>
        </div> 
            <div className="flex flex-wrap">
                {filteredListOfRestaurants.map((restaurant) => <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id} ><RestaurantCard restaurantDetails={restaurant}/></Link>
                )}
        </div>
        </div>
    )
}

export default Body;