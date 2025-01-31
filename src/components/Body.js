import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { MENU_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterListOfRestaurants, setFilterListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.80284&lng=75.7786314&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false)
    return (
      <h1>
        Lost in the offline world? Check your internet connection and come back
        soon!
      </h1>
    );

  if (listOfRestaurants.length == 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className=" border border-solid border-black rounded-md"
            placeholder="  Search restaurants..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              const temp = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterListOfRestaurants(temp);
              if (e.target.value == "") {
                setFilterListOfRestaurants(listOfRestaurants);
              }
            }}
          />
          {/* <button
            className="search-btn"
            onClick={() => {
              const temp = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterListOfRestaurants(temp);
            }}
          >
            search
          </button> */}
        </div>
        <button
          className="filter-button border px-4 my-7 bg-gray-200 rounded-lg"
          onClick={() => {
            const filterList = filterListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilterListOfRestaurants(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap gap-4">
        {filterListOfRestaurants.map((ele) => (
          <Link key={ele.info.id} to={"/restaurant/" + ele.info.id}>
            <RestaurantCard
              key={ele.info.id}
              resData={ele}
              className="h-full flex-grow"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
