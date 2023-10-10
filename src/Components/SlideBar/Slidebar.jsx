import React from "react";
import "./slidebar.css";

import OwlCarousel from "react-owl-carousel";
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";

const Slidebar = () => {
  return (
    <>
      <div className="slider">
        <OwlCarousel className="owl-theme" items={3} autoplay nav dots loop>
          {/* phoneImage */}
          <div className="phoneSlider">
            <div className="phoneSliderInfo">
              <button>Shop Now</button>
            </div>
          </div>

          {/* watchImage */}
          <div className="watchSlider">
            <div className="watchSliderInfo">
              <button>Shop Now</button>
            </div>
          </div>

          {/* headsetImage */}
          <div className="headsetSlider">
            <div className="headsetSliderInfo">
              <button>Shop Now</button>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default Slidebar;
