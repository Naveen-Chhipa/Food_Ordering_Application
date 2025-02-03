import ItemCards from "./ItemCards";
const ResCategory = (props) => {
  //   console.log(props);
  // const {}
  return (
    <div className="rounded-lg text-center bg-gray-70 w-6/12 shadow-lg mx-auto my-4 ">
      <div className="flex justify-between">
        <span className="font-bold text-lg p-2">
          {props.data.title} ({props.data.itemCards.length})
        </span>
        <span className="p-3"> ⬇️</span>
      </div>
      <ItemCards item={props.data.itemCards} />
    </div>
  );
};
export default ResCategory;
