import React from "react";
import "./HeroSection.css"; 

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <div>
          <a className="power-btn" href="#">POWERFULL</a><br />
          <h1>Group <br />Pratice <br />With Trainer</h1>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda temporibus porro necessitatibus dolore incidunt nobis autem deserunt minus repellat dolorem?</p>
        <div className="hero-btn">
          <a className="signup-btn" href="#">Sign Up</a>
          <a className="details-btn" href="#">Details</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
