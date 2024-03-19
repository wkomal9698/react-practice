import { RESTAURANT_IMAGE_URL } from "../utils/constants";

const ItemList = ({items}) => {
    // console.log("item list :: ", items)
    return (
        <div>
            {items.map(item => <div key={item.card.info.id}>
                <div className="text-lg font-semibold flex justify-between mt-4 ml-4">
                    <span>{item.card.info.name}</span>
                    <span>₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice ? item.card.info.defaultPrice/100 : 0}</span>
                </div>
                <div className="flex justify-between mb-10 border-b-2 ">
                <p className="font-thin text-sm p-4 ml-4">{item.card.info.description}</p>
                <div>
                <button className=" text-xs p-2 rounded-lg bg-slate-500 text-white absolute shadow-lg m-auto">Add +</button>
                <img src={RESTAURANT_IMAGE_URL+item.card.info.imageId} className="rounded-lg w-40 mb-4"/>
                </div>
                </div>
            </div>)}
        </div>
    )
}

export default ItemList;