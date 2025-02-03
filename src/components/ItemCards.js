const ItemCards = (props) => {
  console.log("itemcards", props);
  const { item } = props;

  return (
    <div>
      {item.map((items) => (
        <div className="text-left mx-2 px-2 border-gray-200 border-b-2">
          <div className="py-2"> 
            <span className="font-semibold">{items.card.info.name}</span>
            <span>
              {" "}
              -₹
              {items.card.info.price
                ? items.card.info.price / 100
                : items.card.info.defaultPrice / 100}
            </span>
          </div>

          <p className="text-xs text-gray-600">{items.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};
export default ItemCards;
