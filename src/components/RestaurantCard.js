import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info || {};
  return (
    <div className="mx-4 py-6 p-4 w-[200] bg-gray-100 rounded-lg hover:bg-gray-200 flex flex-col h-full">
      <img
        className="rounded-lg object-cover h-[150px] w-full"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{cuisines?.join(", ")}</h4>

      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mintues</h4>
    </div>
  );
};

export const withLableRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
