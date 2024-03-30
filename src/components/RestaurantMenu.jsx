import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(-1);
    const userData = useContext(UserContext);

    
    if(resInfo === null) { 
        return <Shimmer/>;
    }

    const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log("itemCards:: ", resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log("cate: ", categories)

    
    return (
        <div>
            <h1 className="text-2xl my-6">Welcome, {userData.loggedInuser}!</h1>
        <div className="text-center font-bold">
            <h1 className="text-2xl my-6">{name}</h1>
            <p className="text-lg">{cuisines.join(', ')} - {costForTwoMessage}</p>
            </div>
            
            {categories.map((category, index) => 
            // Controlled component
            <RestaurantCategory key={category.card.card.title} categoryData={category} showItems={index === showIndex} setShowIndex={() => showIndex === index ? setShowIndex(-1) : setShowIndex(index)}/>)}
            
        </div>
    )
}

export default RestaurantMenu;