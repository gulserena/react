import React, { useState, useEffect } from "react";
import "./ContactSection.css"; 

const ContactSection = () => {

  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <h2>CONTACT US</h2>
        <div className="yellow-line"></div>
        <p>
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classical at Hampden-Sydney College.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <p><strong>Mobile Number</strong></p>
              <p>+135 773 321 4442</p>
            </div>
            <div className="info-item">
              <p><strong>Email Address</strong></p>
              <p>demo@demo.com</p>
            </div>
          </div>

          <div className="form-container">
            <h3>Make An Appointment</h3>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4499.281597464103!2d30.550877843433565!3d37.76598987915123!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1742464556243!5m2!1str!2str"
            width="500"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {showButton && (
        <button onClick={scrollToTop} id="topBtn">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </section>
  );
};

export default ContactSection;
