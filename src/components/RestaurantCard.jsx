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

export default RestaurantCard;