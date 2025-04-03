import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import CardSection from './components/CardSection';
import ClassesSection from './components/ClassesSection';
import BMICalculator from './components/BMICalculator';
import TrainerSection from './components/TrainerSection';
import PurchaseSection from './components/PurchaseSection';
import ReviewSection from './components/ReviewSection';
import ContactSection from './components/ContactSection';
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";



function App() {
  return (
    <div>
      <Header />
      <main style={{ marginTop: "80px", padding: "20px", color: "white" }}>
        <h1>Welcome to PowerFull</h1>
      </main>
      <HeroSection />
      <CardSection />
      <ClassesSection />
      <BMICalculator />
      <TrainerSection />
      <PurchaseSection />
      <ReviewSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [progressWidth, setProgressWidth] = useState(0);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateBMI = () => {
    if (!height || !weight || isNaN(height) || isNaN(weight)) {
      setBmi("Lütfen geçerli bir boy ve kilo giriniz!");
      setProgressWidth(0);
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const calculatedBmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(calculatedBmi);

    let categoryText = "";
    let progress = 0;

    if (calculatedBmi < 18.5) {
      categoryText = "UNDER WEIGHT";
      progress = 20;
    } else if (calculatedBmi < 24.9) {
      categoryText = "NORMAL";
      progress = 50;
    } else if (calculatedBmi < 29.9) {
      categoryText = "OVER WEIGHT";
      progress = 75;
    } else if (calculatedBmi < 34.9) {
      categoryText = "OBESE";
      progress = 90;
    } else {
      categoryText = "EXTREMELY OBESE";
      progress = 100;
    }

    setCategory(categoryText);
    setProgressWidth(progress);
  };

  return (
    <div>
      <header style={{ backgroundColor: scrollPosition > 20 ? "#325492" : "transparent" }}>
        <nav className={menuOpen ? "active" : ""}>
          <button className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </nav>
      </header>

      <div className="bmi-container">
        <h2>BMI Hesaplayıcı</h2>
        <input type="number" placeholder="Boy (cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
        <input type="number" placeholder="Kilo (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <button onClick={calculateBMI}>Hesapla</button>
        <div id="bmiResult">{bmi && <p>Vücut Kitle İndeksiniz: <strong>{bmi}</strong></p>}</div>
        <p>Kategori: <strong>{category}</strong></p>
        <div className="progress-bar" style={{ width: `${progressWidth}%`, backgroundColor: progressWidth > 90 ? "red" : progressWidth > 75 ? "orange" : progressWidth > 50 ? "yellow" : "green" }}></div>
      </div>

      <button id="topBtn" style={{ display: scrollPosition > 300 ? "block" : "none" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        ⬆️ Yukarı Çık
      </button>
    </div>
  );




export default App;
