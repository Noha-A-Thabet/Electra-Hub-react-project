import React, { useEffect } from "react";
import classes from "./Mobiles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

const MobileList = ({ mobile }) => {
  const { name, price, image } = mobile;

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(mobile));
  };

  return (
    <div>
      <div className={classes.parent}>
        <div className={classes.child}>
          <img src={image} alt="" />
          <span className={classes.rating}>
            <i class="stars fa-solid fa-star"></i>
            <i class="stars fa-solid fa-star"></i>
            <i class="stars fa-solid fa-star"></i>
            <i class="stars fa-solid fa-star"></i>
            <i class="stars last fa-solid fa-star"></i>
          </span>
          <h2>{name}</h2>

          <p className={classes.price}>${price}</p>
          <button onClick={addToCartHandler}>Add To Cart</button>
        </div>
      </div>
      {/* //// */}
    </div>
  );
};

export default MobileList;
