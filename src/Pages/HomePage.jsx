import React, { useEffect, useRef } from "react";
import FreeShippingBar from "../Components/FreeShippingBar/FreeShippingBar";
import NewsBar from "../Components/NewsBar/NewsBar";
import GoogleNews from "../assests/Pixel_8_Pro.jpg";
import HuaewiNews from "../assests/desk.webp";
import LGNews from "../assests/MMSA_TSR_mob_new.jpg";
import MetaNews from "../assests/MMSA_TSR_mob_new (1).jpg";
import classes from "./Home.module.css";
import cupons from "../assests/cupon.jpg";
import wash from "../assests/wash.jpg";
import Mobiles from "../Components/Mobiles/Mobiles";
import DailyHighlights from "../Components/DailyHighlights/DailyHighlights";
import Laptop from "../Components/Laptop/Laptop";
import SmartWatch from "../Components/SmartWatch/SmartWatch";
import Tablet from "../Components/Tablet/Tablet";
import AllBrands from "../Components/Brands/AllBrands";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    let pressed = false;
    let startX = 0;

    const handleMouseDown = (e) => {
      pressed = true;
      startX = e.clientX;
      wrapper.style.cursor = "grabbing";
    };

    const handleMouseLeave = () => {
      pressed = false;
    };

    const handleMouseUp = () => {
      pressed = false;
      wrapper.style.cursor = "grab";
    };

    const handleMouseMove = (e) => {
      if (!pressed) {
        return;
      }
      wrapper.scrollLeft += startX - e.clientX;
    };

    wrapper.addEventListener("mousedown", handleMouseDown);
    wrapper.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseup", handleMouseUp);
    wrapper.addEventListener("mousemove", handleMouseMove);

    return () => {
      wrapper.removeEventListener("mousedown", handleMouseDown);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseup", handleMouseUp);
      wrapper.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <FreeShippingBar />
      <div className={classes.wrapper} ref={wrapperRef}>
        <NewsBar
          image={GoogleNews}
          newsTitle="novelty"
          newsHeading="Google News"
          newsPara="Get the new Google Pixel 8 series and Pixel Watch 2 with attractive extras and services now at Electra Hub."
        />
        <NewsBar
          image={HuaewiNews}
          newsTitle="novelty"
          newsHeading="More Than Just The Time"
          newsPara="Buy the new HUAWEI Watch GT 4 now and get HUAWEI FreeBuds SE 2 - only until October 15th."
        />
        <NewsBar
          image={LGNews}
          newsTitle="Only Until Novemebr 5TH"
          newsHeading="A Big Movie Theater"
          newsPara="Golden times for LG fans: Get up to € 5,300 cashback on promotional products for Smart TVs &amp; Audio."
        />
        <NewsBar
          image={MetaNews}
          newsTitle="Pre-order now & secure it before anyone else"
          newsHeading="Totally Digital Real"
          newsPara="Meta Quest 3: groundbreaking mixed reality + powerful technology for an immersive gaming experience."
        />
        <NewsBar
          image={cupons}
          newsTitle="Onlu Until October 15th"
          newsHeading="Cupon Days are Happy Days"
          newsPara="Only for Electra Hub customers: Get exclusive discount coupons now &amp; save up to 30% – online &amp; in the market."
        />
        <NewsBar
          image={wash}
          newsTitle="Only until October 15th."
          newsHeading="Delivery luxury"
          newsPara="All-round service: delivery, assembly/installation, connection &amp; function check from 19.-"
        />
      </div>

      {/* <AllBrands /> */}
      <DailyHighlights />
      <Mobiles />
      <Laptop />
      <SmartWatch />
      <Tablet />
      <Footer />
    </>
  );
};

export default HomePage;
