import React, { useState, useEffect } from "react";
import AllCategories from "./AllCategories";
import CategoryList from "./CategoryList";
import classes from "./Category.module.css";

const Category = () => {
  const [category, setCategory] = useState([]);

  // Lift State Up  from All Categories Component
  const onSaveAllCategoris = (catgories) => {
    const categoryData = {
      ...catgories,
    };

    // convert object to array
    const categoryArray = Object.values(categoryData);
    setCategory(categoryArray);
  };

  return (
    <nav className={classes.categoryBar}>
      <h2>Our delivery luxury categories</h2>
      <ul>
        {/* <li>
          <AllCategories onSaveAllCategoris={onSaveAllCategoris} />
        </li> */}

        <li>
          <CategoryList category={category} />
        </li>
      </ul>
    </nav>
  );
};

export default Category;
