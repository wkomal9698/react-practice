import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({categoryData, showItems, setShowIndex}) => {
    // console.log("PROPS:: ", categoryData);
    const {itemCards, title} = categoryData?.card?.card;
    // const [showItems, setShowItems] = useState(false);

    handleClick = () => {
            setShowIndex();
        
        
    }

    return (
        
            <div className=" w-3/5 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between font-bold text-lg" onClick={handleClick}>
                    <span>{title} ({itemCards.length})</span>
                    {showItems ? <span>▲</span> : <span>▼</span> }
                </div>
                {showItems ? <ItemList items={itemCards}/> : null}
            </div>
            

    )
}

export default RestaurantCategory;