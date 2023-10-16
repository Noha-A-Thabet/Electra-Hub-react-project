import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import classes from "./RootLayout.module.css";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <h1>CART</h1>
      <ul>
        {cartItems.map((item, index) => {
          const { name, type, price, image, cartQuantity } = item;

          return (
            <div key={index}>
              <li>{name}</li>
              <li>{type}</li>
              <li>{price}</li>
              <li>{cartQuantity}</li>
              <img src={image} className={classes.cartImg} alt="" />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
