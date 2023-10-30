import React, { useEffect, useRef, useState } from "react";
import classes from "./SmartWatch.module.css";
import SmartWatchList from "./SmartWatchList";

const SmartWatch = () => {
  const [watches, setWatches] = useState([]);
  const arrowRef = useRef(null);

  //   fetch data
  const fetchData = async () => {
    const url = "http://localhost:4000/Electronics";
    const response = await fetch(url);
    const data = await response.json();
    const watchType = data.filter((watch) => watch.type === "Smartwatch");
    setWatches(watchType);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // arrows Functions for right & left
  const rightScrollHnalder = () => {
    if (arrowRef.current) {
      arrowRef.current.scrollLeft += 370;
    }
  };

  const leftScrollHnalder = () => {
    if (arrowRef.current) {
      arrowRef.current.scrollLeft -= 370;
    }
  };

  return (
    // start Header
    <div className={classes.mobileParent}>
      <div className={classes.header}>
        <div className={classes.heading}>
          <h1>Watches</h1>
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
        {watches.map((watch, index) => {
          return (
            <div className={classes.gaps}>
              <SmartWatchList key={index} watch={watch} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SmartWatch;
