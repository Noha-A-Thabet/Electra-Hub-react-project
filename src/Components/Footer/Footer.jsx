import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={classes.contact}>
          <h2> Contact</h2>
          <ul>
            <li>
              <i class="fa-solid fa-message"></i>
              <span>questions and answers </span>
              <span className={classes.findIt}>you can find it here</span>
            </li>
            <li>
              <i class="fa-solid fa-file-lines"></i>
              <span>write us </span>
              <span className={classes.findIt}>contact form</span>
            </li>
          </ul>
          <ul>
            <li>
              <i class="fa-brands fa-facebook"></i>
            </li>

            <li>
              <i class="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i class="fa-brands fa-youtube"></i>
            </li>

            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
          </ul>
        </div>

        <div className={classes.service}>
          <h2>Service</h2>
          <ul>
            <li>All services</li>
            <li>Shipping Information</li>
            <li>FAQ</li>
            <li>Disposal of old devices</li>
            <li>Affiliate partner program</li>
            <li>Newsletter Sign up</li>
            <li>Business customer</li>
            <li>Construction & initial setup</li>
            <li>Returns/Returns</li>
            <li>Rental service</li>
            <li>Cancel contracts here</li>
          </ul>
        </div>

        <div className={classes.about}>
          <h2>About Us</h2>
          <ul>
            <li>Pursue</li>
            <li>Jobs & Careers</li>

            <li> Our markets</li>
            <li>our brands</li>
            <li>Press</li>
            <li>sustainability</li>
            <li>Vulnerability Disclosure Program</li>
            <li>
              Complaints procedure for human rights and environmental protection
            </li>
            <li>Electra partner</li>
          </ul>
        </div>

        <div className={classes.category}>
          <h2>Top Categories</h2>

          <ul>
            <li>Mobiles</li>
            <li>Laptops</li>
            <li>Tablets</li>
            <li>Watches</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
