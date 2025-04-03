import React, { useState } from "react";
import './Classes.css'; 

const ClassesSection = () => {
  
  const [activeClass, setActiveClass] = useState("yoga");


  const showContent = (className) => {
    setActiveClass(className);
  };

  return (
    <div className="section-classes" id="classes">
      <div className="container">
        <h1 className="classes-title extra-bold">OUR CLASSES</h1>
        <div className="yellow-line"></div>
        <div className="classes-content">
          <p id="classContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="buttons-container">
            <button
              className={`class-button ${activeClass === "yoga" ? "active" : ""}`}
              onClick={() => showContent("yoga")}
            >
              Yoga
            </button>
            <button
              className={`class-button ${activeClass === "group" ? "active" : ""}`}
              onClick={() => showContent("group")}
            >
              Group
            </button>
            <button
              className={`class-button ${activeClass === "solo" ? "active" : ""}`}
              onClick={() => showContent("solo")}
            >
              Solo
            </button>
            <button
              className={`class-button ${activeClass === "stretching" ? "active" : ""}`}
              onClick={() => showContent("stretching")}
            >
              Stretching
            </button>
          </div>

          {/* Yoga Content */}
          {activeClass === "yoga" && (
            <div className="content-container" id="yogaContent">
              <div className="text-box">
                <h3>Why you should do Yoga?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fuga hic dolores consequuntur odit perferendis tenetur. Tempore corrupti quis nobis!</p>
                <h3>Yoga Schedule</h3>
                <p>Saturday-Sunday: 8:00am - 10:00am</p>
                <p>Monday-Tuesday: 10:00am - 12:00am</p>
                <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
              </div>
              <div className="image-box">
                <img className="yogapic" src="img/yoga.jpg" alt="Yoga" />
              </div>
            </div>
          )}

          {/* Group Content */}
          {activeClass === "group" && (
            <div className="content-container" id="groupContent">
              <div className="text-box">
                <h3>Why you should do Group Content?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>Group Schedule</h3>
                <p>Saturday-Sunday: 8:00am - 10:00am</p>
                <p>Monday-Tuesday: 10:00am - 12:00am</p>
                <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
              </div>
              <div className="image-box">
                <img className="yogapic" src="img/group.webp" alt="Group" />
              </div>
            </div>
          )}

          {/* Solo Content */}
          {activeClass === "solo" && (
            <div className="content-container" id="soloContent">
              <div className="text-box">
                <h3>Why you should do Solo Class?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>Solo Schedule</h3>
                <p>Saturday-Sunday: 8:00am - 10:00am</p>
                <p>Monday-Tuesday: 10:00am - 12:00am</p>
                <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
              </div>
              <div className="image-box">
                <img className="yogapic" src="img/solo.jpg" alt="Solo" />
              </div>
            </div>
          )}

          {/* Stretching Content */}
          {activeClass === "stretching" && (
            <div className="content-container" id="stretchingContent">
              <div className="text-box">
                <h3>Why you should do Stretching?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur enim omnis harum eum. Nulla natus, autem sed nesciunt quas magnam.</p>
                <h3>Stretching Schedule</h3>
                <p>Saturday-Sunday: 8:00am - 10:00am</p>
                <p>Monday-Tuesday: 10:00am - 12:00am</p>
                <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
              </div>
              <div className="image-box">
                <img className="yogapic" src="img/stret.webp" alt="Stretching" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassesSection;
