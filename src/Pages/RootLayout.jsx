import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import classes from "./RootLayout.module.css";

const RootLayout = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const showNavbar = () => {
    setOpenMenu((prev) => !prev);
  };

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
                    Login <i class="fa-regular fa-user "></i>
                  </Link>
                </li>
                <li>
                  <Link to="whishList" className={classes.links}>
                    Whishlist <i class="fa-regular fa-heart"></i>
                  </Link>
                </li>
                <li>
                  <Link to="cart" className={classes.links}>
                    Cart <i class="fa-solid fa-cart-shopping"></i>
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
