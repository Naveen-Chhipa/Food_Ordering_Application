import ItemCards from "./ItemCards";
import { useState } from "react";
const ResCategory = ({ data, showItems, setShowIndex }) => {
  console.log("data-checking", data);
  const clickhandle = () => {
    setShowIndex();
  };
  return (
    <div className="rounded-lg text-center bg-gray-70 w-6/12 shadow-md mx-auto my-4 ">
      <div
        className="cursor-pointer flex justify-between"
        onClick={clickhandle}
      >
        <span className="font-bold text-lg p-2">
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span className="p-3"> ⬇️</span>
      </div>

      {showItems && <ItemCards item={data?.itemCards} />}
    </div>
  );
};
export default ResCategory;
