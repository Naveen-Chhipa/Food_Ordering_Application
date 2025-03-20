import { useDispatch, useSelector } from "react-redux";
import ItemCardsForCart from "./itemCardsForCart";
import { clearCart } from "../utils/redux-store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-6/12 mx-auto text-center m-4 p-6 bg-white shadow-lg rounded-lg relative">
      {/* Header Section with Button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-3xl text-gray-800">🛒 Your Cart</h1>
        <button
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out"
          onClick={handleClearCart}
        >
          Clear Cart ❌
        </button>
      </div>

      {/* Cart Items */}
      <div className="my-5">
        {cartItems.length > 0 ? (
          <ItemCardsForCart item={cartItems} />
        ) : (
          <p className="text-gray-500 text-lg font-medium">
            Your cart is empty. 🛍️
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
