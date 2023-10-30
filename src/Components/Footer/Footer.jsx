import React from "react";
import classes from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={classes.contact}>
          <h2> Contact</h2>
          <ul>
            <li className={classes.icon}>
              <span>questions and answers </span>
              <br />
              <span className={classes.findIt}>you can find it here</span>
            </li>
            <li className={classes.icon}>
              <span>write us </span>
              <br />
              <span className={classes.findIt}>contact form</span>
            </li>
          </ul>
          <ul className={classes.socialIcons}>
            <li className={classes.icon}>
              <Link
                to="http://www.facebook.com"
                className={classes.facebooklink}
              >
                <i class="fa-brands fa-facebook"></i>
              </Link>
            </li>

            <li className={classes.icon}>
              <Link to="http://www.twitter.com" className={classes.twitterlink}>
                <i class="fa-brands fa-twitter"></i>
              </Link>
            </li>
            <li className={classes.icon}>
              <Link to="http://www.youtube.com" className={classes.youtubelink}>
                <i class="fa-brands fa-youtube you"></i>
              </Link>
            </li>

            <li className={classes.icon}>
              <Link to="http://www.instagram.com" className={classes.instalink}>
                <i class="fa-brands fa-instagram"></i>
              </Link>
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
            <li>Electra partner</li>
          </ul>
        </div>

        <div className={classes.category}>
          <h2>Top Categories</h2>
          <ul>
            <li>
              <Link to="mobiles" className={classes.links}>
                Mobiles
              </Link>
            </li>
            <li>
              <Link to="laptops" className={classes.links}>
                Laptops
              </Link>
            </li>
            <li>
              <Link to="tablets" className={classes.links}>
                Tablets
              </Link>
            </li>
            <li>
              <Link to="watches" className={classes.links}>
                Watches
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
