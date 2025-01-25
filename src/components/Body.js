import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { MENU_API } from "../utils/constants";
import { Link } from "react-router-dom";

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
  if (listOfRestaurants.length == 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            className="search-box"
            placeholder="Search restaurants..."
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
          className="filter-button"
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
      <div className="res-container">
        {filterListOfRestaurants.map((ele) => (
          <Link key={ele.info.id} to={"/restaurant/" + ele.info.id}>
            <RestaurantCard key={ele.info.id} resData={ele} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
