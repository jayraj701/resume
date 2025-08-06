import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogHeaderWithNav from "./BlogHeader";
import BlogFooter from "./BlogFooter";
import "../App.css";
import "../css/references.css";

const referenceImages = [
  {
    image: "images/paul.png",
    alt: "LinkedIn Recommendation- Paul Grey",
    linkedin: "https://www.linkedin.com/in/jayrajnimbalkar/details/recommendations/?detailScreenTabIndex=0"
  },
  {
    image: "images/matt.png",
    alt: "LLinkedIn Recommendation- Matt Smith",
    linkedin: "https://www.linkedin.com/in/jayrajnimbalkar/details/recommendations/?detailScreenTabIndex=0"
  },
  {
    image: "images/dion.png",
    alt: "LinkedIn Recommendation- Dion Judge",
    linkedin: "https://www.linkedin.com/in/jayrajnimbalkar/details/recommendations/?detailScreenTabIndex=0"
  },
  {
    image: "images/raphael.png",
    alt: "LinkedIn Recommendation- Raphael Yoshiga",
    linkedin: "https://www.linkedin.com/in/jayrajnimbalkar/details/recommendations/?detailScreenTabIndex=0"
  }
  // Add more screenshots as needed
];

const ReferencesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "16px",
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "8px",
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  };

  return (
    <>
      <BlogHeaderWithNav />
      <section id="references" className="references-section">
        <div className="references-fullwidth">
          <h2 className="references-title">References & Recommendations</h2>
          <Slider
            {...settings}
            className="carousel-slider center-mode-slider"
          >
            {referenceImages.map((ref, idx) => (
              <div key={idx} className="carousel-card">
                <div className="carousel-img-wrapper">
                  <img
                    src={ref.image}
                    alt={ref.alt}
                    className="carousel-img"
                    onClick={() => { setModalOpen(true); setModalImg(ref); }}
                    title="Click to expand"
                  />
                </div>
                <div className="carousel-link-row">
                  <a href={ref.linkedin} target="_blank" rel="noopener noreferrer" className="carousel-link">
                    View on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {modalOpen && modalImg && (
          <div className="modal-overlay" onClick={() => setModalOpen(false)}>
            <img
              src={modalImg.image}
              alt={modalImg.alt}
              className="modal-img"
              onClick={e => e.stopPropagation()}
            />
            <button onClick={() => setModalOpen(false)} className="modal-close-btn" aria-label="Close Modal">
              <span className="modal-close-x">&times;</span>
            </button>
          </div>
        )}
      </section>
      <BlogFooter />
    </>
  );
};

export default ReferencesPage;
