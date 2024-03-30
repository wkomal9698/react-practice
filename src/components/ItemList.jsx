import { useDispatch } from "react-redux";
import { RESTAURANT_IMAGE_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items, fromCart=false}) => {
    // console.log("item list :: ", items)

    const dispatch = useDispatch();

    const handleAddItem = (item) => {

        // console.log("add items clicked:: ", name, price)

        // dispatch an action
        // Payload is whatever we send here
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map(item => <div data-testid="foodItems" key={item.card.info.id}>
                <div className="text-lg font-semibold flex justify-between mt-4 ml-4">
                    <span>{item.card.info.name}</span>
                    <span>₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice ? item.card.info.defaultPrice/100 : 0}</span>
                </div>
                <div className="flex justify-between mb-10 border-b-2 ">
                <p className="font-thin text-sm p-4 ml-4">{item.card.info.description}</p>
                <div>
                {!fromCart ? <button className="text-xs p-2 rounded-lg bg-slate-500 text-white absolute shadow-lg m-auto"
                onClick={() => handleAddItem(item)}
                >Add +</button> : null}
                <img src={RESTAURANT_IMAGE_URL+item.card.info.imageId} className="rounded-lg w-40 mb-4"/>
                </div>
                </div>
            </div>)}
        </div>
    )
}

export default ItemList;