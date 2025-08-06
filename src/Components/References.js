import React, { useState } from "react";
import "../App.css";

// Dummy data for LinkedIn references carousel
const references = [
  {
    image: "images/references/paul.png", // Updated as per user request
    name: "John Doe",
    position: "CTO, Example Corp",
    linkedin: "https://www.linkedin.com/in/dummyprofile1",
    text: "Jayraj is a visionary technology leader who consistently delivers high-impact results."
  },
  {
    image: "images/references/ref2.jpg",
    name: "Jane Smith",
    position: "Head of Engineering, FinTech Ltd",
    linkedin: "https://www.linkedin.com/in/dummyprofile2",
    text: "His technical depth and leadership have been instrumental in our digital transformation."
  }
  // Add more references as needed
];

const ReferencesCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = references.length;

  const next = () => setCurrent((current + 1) % total);
  const prev = () => setCurrent((current - 1 + total) % total);

  return (
    <section id="references" className="references-section">
      <h2>References & Recommendations</h2>
      <div className="carousel-container">
        <button className="carousel-arrow left" onClick={prev}>&#8592;</button>
        <div className="carousel-card">
          <img src={references[current].image} alt={references[current].name} className="reference-img" />
          <div className="reference-info">
            <h3>{references[current].name}</h3>
            <p className="reference-position">{references[current].position}</p>
            <a href={references[current].linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
              View on LinkedIn
            </a>
            <blockquote className="reference-text">{references[current].text}</blockquote>
          </div>
        </div>
        <button className="carousel-arrow right" onClick={next}>&#8594;</button>
      </div>
    </section>
  );
};

export default ReferencesCarousel;
