import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>COMPANY INFO</h3>
        <ul>
          <li>About</li>
          <li>Social Responsibility</li>
          <li>Affiliate</li>
          <li>Fashion Blogger</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>HELP & SUPPORT</h3>
        <ul>
          <li>Shipping Info</li>
          <li>Returns</li>
          <li>How to Order</li>
          <li>How to Track</li>
          <li>Size Chart</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>CUSTOMER CARE</h3>
        <ul>
          <li>Contact Us</li>
          <li>Payment</li>
          <li>Bonus Point</li>
          <li>Notices</li>
        </ul>
      </div>
      <div className="footer-column">
        <div className="social-media">
          <h3>SOCIALS</h3>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
        <div className="platform">
          <h3>PLATFORMS</h3>
          <AndroidIcon />
          <AppleIcon />
        </div>
        <div className="subscribe">
          <input type="email" placeholder="Your email" />
          <button>SUBSCRIBE</button>
          <p>Enter your email to subscribe for our newsletter.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
