import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    // Subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items)
    console.log("Cart items: ", cartItems)

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart Items</h1>
            <div className="search p-4 flex items-center">
            <button className="m-auto px-4 py-2 bg-blue-100 shadow-md items-center rounded-lg" 
            onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className="w-6/12 m-auto">
            {cartItems.length > 0 ? <ItemList items={cartItems} fromCart={true}/> : <div className=" text-slate-500 text-center font-bold text-lg">Cart is empty. Please add items.</div>}
            </div>
        </div>
    )
}

export default Cart;