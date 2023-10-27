import React from "react";
import lgImg from "../../assests/brands/Samsung_200x80_4C_MM-Herstellerlogos-Brand-Bar (1).webp";
import samsungImg from "../../assests/brands/Samsung_200x80_4C_MM-Herstellerlogos-Brand-Bar (2).webp";
import appleImg from "../../assests/brands/Apple_200x80_1C_MM-Herstellerlogos-Brand-Bar.webp";
import googleImg from "../../assests/brands/brand_bar_google.jpg";
import miImg from "../../assests/brands/Mi_Logo_-_Xiaomi_Orange.webp";
import sonyImg from "../../assests/brands/Sony_200x80_1C_MM-Herstellerlogos-Brand-Bar.webp";
import microsoftImg from "../../assests/brands/Microsoft_200x80_4C_MM-Herstellerlogos-Brand-Bar.webp";
import BrandList from "./BrandList";
import classes from "./brands.module.css";

const AllBrands = () => {
  const allBrands = [
    {
      id: 2,
      name: "APPLE",
      img: appleImg,
    },
    {
      id: 3,
      name: "SAMSUNG",
      img: samsungImg,
    },
    {
      id: 6,
      name: "SONY",
      img: sonyImg,
    },
    {
      id: 1,
      name: "LG",
      img: lgImg,
    },
    {
      id: 4,
      name: "GOOGLE",
      img: googleImg,
    },
    {
      id: 5,
      name: "MI",
      img: miImg,
    },
    // {
    //   id: 7,
    //   name: "MICROSOFT",
    //   img: microsoftImg,
    // },
  ];

  return (
    <div className={classes.Parent}>
      {allBrands.map((brand, index) => {
        const { img } = brand;
        return (
          <div key={index}>
            <BrandList img={img} />
          </div>
        );
      })}
    </div>
  );
};

export default AllBrands;
