import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/redux-store/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemCardsForCart = ({ item }) => {
  const dispatch = useDispatch();

  // Group items by ID and count their occurrences
  const itemMap = item.reduce((acc, cartItem) => {
    const id = cartItem.card.info.id;
    if (!acc[id]) {
      acc[id] = { ...cartItem, quantity: 1 };
    } else {
      acc[id].quantity += 1;
    }
    return acc;
  }, {});

  // Convert object back to array
  const groupedItems = Object.values(itemMap);

  return (
    <div className="space-y-4">
      {groupedItems.map((cartItem) => (
        <div
          key={cartItem.card.info.id}
          className="flex justify-between items-center border border-gray-200 p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {/* Item Details */}
          <div className="flex items-center space-x-4">
            <img
              src={CDN_URL + cartItem.card.info.imageId}
              alt={cartItem.card.info.name}
              className="w-16 h-16 object-cover rounded-lg border border-gray-200"
            />
            <div>
              <p className="font-bold text-gray-800">
                {cartItem.card.info.name}
              </p>
              <p className="text-gray-700 text-sm">
                ₹
                {cartItem.card.info.price
                  ? cartItem.card.info.price / 100
                  : cartItem.card.info.defaultPrice / 100}
              </p>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-3 bg-white px-3 py-1 rounded-lg shadow-sm">
            <button
              className="text-red-500 font-bold text-xl px-2"
              onClick={() => dispatch(removeItem(cartItem))}
            >
              -
            </button>
            <span className="text-gray-800 font-bold">{cartItem.quantity}</span>
            <button
              className="text-green-500 font-bold text-xl px-2"
              onClick={() => dispatch(addItem(cartItem))}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCardsForCart;
