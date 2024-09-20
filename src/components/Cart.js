import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const cartItems = useSelector((store) => store.cart.items)
    // console.log("cartPage",cartItems)

    // don't use below code as its subscribing whole store
    // const store = useSelector((store) => store);
    // const cartItems = store.cart.items;

    return cartItems.length === 0 ? <h1 className="text-xl font-bold text-center m-5">Your Cart is Empty</h1> :(
        <div className="text-center m-10">
            <h2>Cart</h2>
            <button 
                className="bg-red-400 m-4 p-3 rounded-md cursor-pointer "
                onClick={handleClearCart}
            >Clear Cart</button>
            <ItemList items={cartItems}/>
        </div>
    )
}

export default Cart;