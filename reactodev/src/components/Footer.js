import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-info">
        <div className="footer-logo">
          <img src="img/logo.png" alt="logo" />
        </div>
        <div className="footer-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non
            nihil magni quod, cumque optio deleniti! Itaque dolorem reprehenderit
            atque magni! Sequi cupiditate iste consectetur!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
            voluptatibus quaerat veniam quo, corrupti ut exercitationem minus
            voluptate ducimus inventore?
          </p>
        </div>
      </div>
      <div className="footer-link">
        <div className="link-left">
          <h2>Information</h2>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Classes</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Helpful Links</h2>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Supports</a></li>
            <li><a href="#">Terms & Condition</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;