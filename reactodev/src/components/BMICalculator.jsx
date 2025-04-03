import React, { useState } from "react";
import "./BMICalculator.css"; 

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [progress, setProgress] = useState(0);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue);

      // Update progress bar based on BMI value
      let progressValue = 0;
      if (bmiValue < 18.5) progressValue = 25;
      else if (bmiValue >= 18.5 && bmiValue < 24.9) progressValue = 50;
      else if (bmiValue >= 25 && bmiValue < 29.9) progressValue = 75;
      else progressValue = 100;
      setProgress(progressValue);
    }
  };

  const resetBMI = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setProgress(0);
  };

  return (
    <section className="bmi-section">
      <div className="bmi-calculator">
        <h1>BMI Calculator</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
          <br /> <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <div className="bmi-inputs">
          <input
            type="number"
            id="inputHeight"
            placeholder="Your Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="number"
            id="inputWeight"
            placeholder="Your Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="bmi-buttons">
          <input
            type="button"
            id="calculateBtn"
            onClick={calculateBMI}
            value="Hesapla"
          />
          <input
            type="button"
            id="resetBtn"
            onClick={resetBMI}
            value="Reset"
          />
        </div>
        {bmi && (
          <div className="bmi-result">
            <span id="bmiResult">Your BMI: {bmi.toFixed(2)}</span>
          </div>
        )}
      </div>

      <div className="calculator-bmi">
        <h3>Your BMI</h3>
        <img src="assets/img/bmi-index.jpg" alt="BMI" />
        <div className="progress-bar">
          <div
            className="progress"
            id="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="button-under">
          {bmi && progress < 50
            ? "Underweight"
            : bmi && progress < 75
            ? "Normal"
            : bmi && progress < 100
            ? "Overweight"
            : "Obese"}
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
