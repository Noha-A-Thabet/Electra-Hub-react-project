import React from "react";
import { useSelector } from "react-redux";

const WhishList = () => {
  const { listItems } = useSelector((state) => state.listItems);
  console.log(listItems);
  return (
    <div>
      {listItems.map((item) => {
        const { name, price } = item;
        return (
          <div>
            <h2>{name}</h2>
            <h3>{price}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default WhishList;
