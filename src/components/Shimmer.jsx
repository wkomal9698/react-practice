import { APP_LOGO_URL } from "../utils/constants"

const Shimmer = (props) => {
    // const {cloudinaryImageId, name, cuisines, avgRating, totalRatingsString, costForTwo} = props?.restaurantDetails?.info;
    // const offerDetails = props?.restaurantDetails?.info?.aggregatedDiscountInfoV3;
    const imgsrc = APP_LOGO_URL;
    return (
        <div className="restaurant-container shimmer-conatiner">
            {[...Array(20)].map((e, i) => <div key={i} className="restaurant-card shimmer-card"/>)}
        </div>
    )
}

export default Shimmer;