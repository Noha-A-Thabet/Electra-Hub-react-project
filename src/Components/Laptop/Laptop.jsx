import React, { useEffect, useRef, useState } from "react";
import classes from "./Laptop.module.css";
import LaptopList from "./LaptopList";

const Laptop = () => {
  const [Laptops, setLaptops] = useState([]);
  const arrowRef = useRef(null);

  //   fetch data
  const fetchData = async () => {
    const url = "http://localhost:4000/Electronics";
    const response = await fetch(url);
    const data = await response.json();
    const LaptopType = data.filter((laptop) => laptop.type === "Laptop");
    setLaptops(LaptopType);
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
          <h1>Laptops</h1>
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
        {Laptops.map((laptop, index) => {
          return (
            <div className={classes.gaps}>
              <LaptopList key={index} laptop={laptop} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Laptop;
