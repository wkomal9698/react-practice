import { RESTAURANT_IMAGE_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    // console.log("rest deets:: ", props?.restaurantDetails?.info?.avgRating);
    // console.log("rating deets:: ", props?.restaurantDetails?.info?.avgRating >=4.5);
    const {cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo} = props?.restaurantDetails?.info;
    const offerDetails = props?.restaurantDetails?.info?.aggregatedDiscountInfoV3;
    const imgsrc = RESTAURANT_IMAGE_URL + cloudinaryImageId;
    return (
        <div className="restaurant-card">
            <img className="restaurant-image" src={imgsrc}></img>
            <div className="restaurant-details">
                <div>
                <h1>{name}</h1>
                <h5>{cuisines.join(", ")}</h5>
            </div>
            <div className="restaurant-misc-details">
                <h4>{avgRating}</h4>
                <h4>.</h4>
                <h4>{sla.slaString}</h4>
                <h4>.</h4>
                <h4>{costForTwo}</h4>
            </div>
            <div>
                <h6>{offerDetails?.header} | {offerDetails?.subHeader}</h6>
            </div>
            </div>
        </div>
    )
}

export default RestaurantCard;