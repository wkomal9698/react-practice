const restaurantList = [
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

export default restaurantList;