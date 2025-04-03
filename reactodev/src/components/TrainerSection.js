import React from "react";
import "./TrainerSection.css"; // Assuming the CSS is saved as TrainerSection.css

const TrainerSection = () => {
  return (
    <section id="trainer" className="trainers">
      <div className="trainer-hero">
        <div className="trainer-info">
          <h3>OUR BEST TRAINERS</h3>
          <div className="yellow-line"></div>
          <p className="text-purchase">
            Lorem ipsum is not simply random text. It has roots in a piece of
            classical at <br /> Hampden-Sydney College.
          </p>
        </div>

        <div className="trainer-cards">
          <div className="cards trainer-1">
            <img src="img/trainer1.jpg" alt="Trainer 1" />
            <div className="trainer-content">
              <h1>Elsa</h1>
              <span>Pilates</span>
            </div>
          </div>

          <div className="cards trainer-2">
            <img src="img/trainer2.jpg" alt="Trainer 2" />
            <div className="trainer-content">
              <h1>Johny Bravo</h1>
              <span>Solo Content</span>
            </div>
          </div>

          <div className="cards trainer-3">
            <img src="img/trainer3.jpg" alt="Trainer 3" />
            <div className="trainer-content">
              <h1>Jane Doe</h1>
              <span>Cardio Trainer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;