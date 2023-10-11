import React from "react";

const CategoryList = (props) => {
  const { category } = props;
  console.log(category);
  return (
    <div>
      <ul></ul>
      <ul>
        {category.map((data) => {
          return <li>{data}</li>;
        })}
      </ul>
    </div>
  );
};

export default CategoryList;
