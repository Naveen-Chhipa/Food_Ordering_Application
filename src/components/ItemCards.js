import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/redux-store/cartSlice";

const ItemCards = ({ item }) => {
  const dispatch = useDispatch();
  const [animatedItems, setAnimatedItems] = useState([]);
  const [cartPosition, setCartPosition] = useState({ top: 0, left: 0 });

  // Find the cart button position when the component mounts
  useEffect(() => {
    const cartButton = document.getElementById("cart-button");
    if (cartButton) {
      const rect = cartButton.getBoundingClientRect();
      setCartPosition({ top: rect.top, left: rect.left });
    }
  }, []);

  const handleItem = (items, event) => {
    dispatch(addItem(items));

    // Get "ADD" button position
    const buttonRect = event.target.getBoundingClientRect();

    // Set animation state for this item
    setAnimatedItems((prev) => [
      ...prev,
      {
        id: items.card.info.id,
        imgSrc: CDN_URL + items.card.info.imageId,
        startX: buttonRect.left,
        startY: buttonRect.top,
        endX: cartPosition.left,
        endY: cartPosition.top,
      },
    ]);

    // Remove animation after it reaches cart
    setTimeout(() => {
      setAnimatedItems((prev) =>
        prev.filter((anim) => anim.id !== items.card.info.id)
      );
    }, 200);
  };

  return (
    <div className="space-y-4 relative">
      {item.map((items) => (
        <div
          key={items.card.info.id}
          className="flex justify-between items-center border border-gray-200 p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="w-3/4">
            <div className="text-left py-2">
              <span className="font-bold text-lg text-gray-800">
                {items.card.info.name}
              </span>
              <span className="font-semibold text-gray-700 ml-2">
                - ₹
                {items.card.info.price
                  ? items.card.info.price / 100
                  : items.card.info.defaultPrice / 100}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-yellow-500 text-lg">⭐</span>
              <span className="text-gray-700 font-medium">
                {items.card.info.ratings?.aggregatedRating?.rating || 4.2}
              </span>
            </div>

            <p className="text-left text-sm text-gray-600 leading-snug mt-2">
              {items.card.info.description}
            </p>
          </div>

          <div className="relative w-28 h-28 flex items-center justify-center">
            {items.card.info.imageId ? (
              <div className="relative">
                <button
                  className="font-bold absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white text-green-500 text-lg px-3 py-1 rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-200"
                  onClick={(e) => handleItem(items, e)}
                >
                  ADD
                </button>
                <img
                  className="w-full h-full object-cover rounded-lg shadow-sm border border-gray-300"
                  src={CDN_URL + items.card.info.imageId}
                  alt={items.card.info.name}
                />
              </div>
            ) : (
              <div>
                <button
                  className="mb-6 border-black font-bold absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white text-green-500 text-lg px-3 py-1 rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-200"
                  onClick={(e) => handleItem(items, e)}
                >
                  ADD
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Animated Images */}
      {animatedItems.map((anim) => (
        <img
          key={anim.id}
          src={anim.imgSrc}
          className="fixed w-12 h-12 object-cover rounded-full shadow-md border border-gray-400 animation-fly"
          style={{
            left: `${anim.startX}px`,
            top: `${anim.startY}px`,
            "--endX": `${anim.endX - anim.startX}px`,
            "--endY": `${anim.endY - anim.startY}px`,
          }}
        />
      ))}
    </div>
  );
};

export default ItemCards;
