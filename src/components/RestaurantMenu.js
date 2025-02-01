import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";

import { MENU_API } from "../utils/constants";
const RestaurnatMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  // // console.log(resId);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const menu = await fetch(MENU_API + resId);
  //   const json = await menu.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };
  // debugger;
  const resInfo = useRestaurantMenu(resId);
  debugger;
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card
      ?.card?.itemCards ??
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards ??
    [];

  console.log("itemCards", itemCards);
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Restaurant Info */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
        <p className="text-gray-500 text-lg">{cuisines?.join(", ")}</p>
        <p className="text-gray-700 font-semibold mt-2">{costForTwoMessage}</p>
      </div>

      {/* Menu Section */}
      <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2 mb-4">
        Menu
      </h2>

      <ul className="space-y-4">
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li
              key={item?.card?.info?.id}
              className="p-4 bg-gray-100 rounded-lg shadow-sm flex justify-between items-center hover:bg-gray-200 transition duration-200"
            >
              <span className="text-gray-800 font-medium">
                {item?.card?.info?.name}
              </span>
              <span className="text-gray-700 font-semibold">
                ₹
                {(item?.card?.info?.defaultPrice || item?.card?.info?.price) /
                  100}
              </span>
            </li>
          ))
        ) : (
          <li className="text-red-500 text-lg font-semibold">
            Menu is not available
          </li>
        )}
      </ul>
    </div>
  );
};
export default RestaurnatMenu;
