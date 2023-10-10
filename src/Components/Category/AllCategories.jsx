import React, { useState, useEffect } from "react";
import classes from "./Category.module.css";

const AllCategories = (props) => {
  const [categoris, setCategies] = useState([]);
  const [displayMenu, setDisplayMenu] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:4000/electronics";
      const response = await fetch(url);
      const data = await response.json();

      //   filter  Data
      const uniqueCategory = data.filter((data, index, array) => {
        const firstIndex = array.findIndex((item) => item.type === data.type);
        return index === firstIndex;
      });

      //   map through categoris
      const categoris = uniqueCategory.map((category, index) => {
        return category.type;
      });

      // sending all Data to Category Component
      props.onSaveAllCategoris(categoris);

      // setCategries to display categories
      setCategies(categoris);
    };
    fetchData();
  }, []);

  // open menu
  const displayMenuHandler = () => {
    setDisplayMenu(true);
  };

  // close menu
  const closeMenuHandler = () => {
    setDisplayMenu(false);
  };

  return (
    <>
      <p onClick={displayMenuHandler} className={classes.menuPara}>
        All Categories <i class="fa-solid fa-caret-down"></i>
      </p>
      {displayMenu && (
        <ul className={classes.allCategories} onMouseLeave={closeMenuHandler}>
          {categoris.map((data) => {
            return <li>{data}</li>;
          })}
        </ul>
      )}
    </>
  );
};

export default AllCategories;
