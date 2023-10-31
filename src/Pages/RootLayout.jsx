import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import classes from "./RootLayout.module.css";
import { getTotal } from "../Components/Redux/cartSlice";
import { getTotalLikes } from "../Components/Redux/favouriteSlice";
const RootLayout = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [showCartLength, setShowCartLenght] = useState(true);
  const [showLikes, setShowLikes] = useState(true);

  const showNavbar = () => {
    setOpenMenu((prev) => !prev);
  };
  const cartItems = useSelector((state) => state.cart.cartItems);
  const listItems = useSelector((state) => state.listItems.listItems);
  const cartTotalQunatity = useSelector(
    (state) => state.cart.cartTotalQunatity
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
    // check length of cartItems
    if (cartItems.length === 0) {
      setShowCartLenght(false);
    } else {
      setShowCartLenght(true);
    }
  }, [cartItems]);

  useEffect(() => {
    dispatch(getTotalLikes());
    if (listItems.length === 0) {
      setShowLikes(false);
    } else {
      setShowLikes(true);
    }
  }, [listItems]);

  return (
    <>
      <header>
        <nav className={classes.Navbar}>
          <label className={classes.logo}>
            <Link to="/">Electra Hub </Link>
          </label>
          <div className={classes.search}>
            <label className={classes["toggle-button"]}>
              <li className="fa fa-bars fa-xl" onClick={showNavbar}></li>
            </label>
          </div>

          {openMenu && (
            <div className={classes.navLinks}>
              <ul>
                <li>
                  <Link to="signIn" className={classes.links}>
                    <i class="fa-regular fa-user "></i>
                  </Link>
                </li>
                <li>
                  <Link to="whishList" className={classes.links}>
                    {showLikes && (
                      <span className={classes.likes}>{listItems.length}</span>
                    )}
                    <i class="fa-regular fa-heart"></i>
                  </Link>
                </li>
                <li>
                  <Link to="cart" className={classes.links}>
                    {showCartLength && (
                      <span className={classes.length}>
                        {cartTotalQunatity}
                      </span>
                    )}
                    <i class="fa-solid fa-cart-shopping"></i>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
