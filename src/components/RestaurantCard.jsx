import { useContext } from "react";
import { RESTAURANT_IMAGE_URL } from "../utils/constants"
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    // console.log("rest deets:: ", props?.restaurantDetails?.info?.avgRating);
    // console.log("rating deets:: ", props?.restaurantDetails?.info);
    const userData = useContext(UserContext);
    const {cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo} = props?.restaurantDetails?.info;
    const offerDetails = props?.restaurantDetails?.info?.aggregatedDiscountInfoV3;
    const imgsrc = RESTAURANT_IMAGE_URL + cloudinaryImageId;
    return (
        <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-slate-100 hover:bg-slate-300 hover:w-[260px]">
            <img className="rounded-md" src={imgsrc}></img>
            <div className="restaurant-details">
                <div>
                <h1 className="font-bold py-4 text-lg">{name}</h1>
                <h5>{cuisines.join(", ")}</h5>
            </div>
            <div className="restaurant-misc-details">
                <h4>{avgRating}</h4>
                <h4>{sla.slaString} for {userData.loggedInuser}</h4>
                <h4>{costForTwo}</h4>
            </div>
            <div>
                <h6>{offerDetails?.header} | {offerDetails?.subHeader}</h6>
            </div>
            </div>
        </div>
    )
}

// Higher Order component
// Input - RestaurantCard => Output - RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-gray-700 text-white m-2 p-2 rounded-lg">Promoted</label>
            <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;