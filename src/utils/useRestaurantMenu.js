import { MENU_API } from "../utils/constants";
import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) => {
  console.log("initial");

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    console.log("useeffect");

    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    console.log("fetch menu");

    const data = await fetch(MENU_API + resId);
    // console.log("data", data);
    const json = await data.json();
    // console.log("json", json);
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantMenu;

// import { MENU_API } from "../utils/constants";
// import { useEffect, useState } from "react";

// const useRestaurantMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     debugger;
//     const data = await fetch(MENU_API + resId);
//     const json = await data.json();
//     setResInfo(json.data);
//   };

//   return resInfo;
// };

// export default useRestaurantMenu;
