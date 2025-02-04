import ItemCards from "./ItemCards";
import { useState } from "react";
const ResCategory = (props) => {
  //   console.log(props);
  // const {}
  const [showItems,setShowItems]=useState(false);
  const clickhandle=()=>{
    showItems?setShowItems(false):setShowItems(true);
  }
  return (
    <div className="rounded-lg text-center bg-gray-70 w-6/12 shadow-md mx-auto my-4 ">
      <div className="cursor-pointer flex justify-between" onClick={clickhandle} >
        <span className="font-bold text-lg p-2">
          {props.data.title} ({props.data.itemCards.length})
        </span>
        <span className="p-3"> ⬇️</span>
      </div>
      {showItems && <ItemCards item={props.data.itemCards}/>}
    </div>
  );
};
export default ResCategory;
