import React, { useState, useEffect, useRef } from "react";
import DailyHighlightsList from "./DailyHighlightsList";
import classes from "./DailyHighlights.module.css";
const AllDailyHighlights = () => {
  const [items, setItems] = useState([]);
  const arrowRef = useRef(null);

  // fetching Data
  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/Electronics");
    const data = await response.json();
    setItems(data.slice(2, 20));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const rightScrollHnalder = () => {
    if (arrowRef.current) {
      arrowRef.current.scrollLeft += 350;
    }
  };

  const leftScrollHnalder = () => {
    if (arrowRef.current) {
      arrowRef.current.scrollLeft -= 350;
    }
  };
  return (
    <>
      <div className={classes.DailyParent}>
        <div className={classes.header}>
          <div className={classes.heading}>
            <h1>Deals</h1>
          </div>
          {/*start  arrows */}
          <div className={classes.arrows}>
            <button className={classes.icon} onClick={leftScrollHnalder}>
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button className={classes.icon} onClick={rightScrollHnalder}>
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          {/* end arrows  */}
        </div>
        {/* End Haeder */}

        <div className={classes.cover} ref={arrowRef}>
          {items.map((item, index) => {
            return (
              <div className={classes.gaps}>
                <DailyHighlightsList item={item} key={index} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllDailyHighlights;
