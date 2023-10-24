import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <li class="fa fa-bars"></li>
        </label>
        <label className="logo">
          <a href="/">Electra Hub </a>
        </label>

        <ul>
          <li>
            <Link className="active" to="#">
              Home
            </Link>{" "}
          </li>
          <li>
            <Link href="/Sign">
              {" "}
              Sign in <i class="fa-regular fa-user"></i>{" "}
            </Link>
          </li>
          <li>
            <Link href="#">
              {" "}
              Wishlist <i class="fa-regular fa-heart"></i>{" "}
            </Link>
          </li>
          <li>
            <Link href="#">
              {" "}
              Cart <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
