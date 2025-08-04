import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const NavigationMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleSectionClick = (e, section) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate(`/#${section}`);
      setMenuOpen(false);
    }
    // Otherwise, let anchor scroll to section
    if (isMobile) setMenuOpen(false);
  };

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      id="nav-wrap"
      style={{
        background: "#222",
        padding: isMobile ? "0.5rem 0 0.5rem 0" : "0.5rem 0",
        position: "relative",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        borderBottom: "1px solid #333"
      }}
    >
      <button
        style={{
          display: isMobile ? "block" : "none",
          position: "absolute",
          top: 10,
          right: 20,
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: "2rem",
          cursor: "pointer",
          zIndex: 2
        }}
        className="nav-toggle"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </button>
      <ul
        style={{
          display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: isMobile ? "flex-start" : "center",
          listStyle: "none",
          margin: 0,
          padding: isMobile ? "1rem" : 0,
          background: isMobile ? "#222" : "none",
          position: isMobile ? "absolute" : "static",
          top: isMobile ? 50 : "auto",
          right: isMobile ? 0 : "auto",
          width: isMobile ? "100%" : "auto",
          zIndex: 1
        }}
      >
        {/* Consistent font style and size for all menu items */}
        <li style={{ margin: "0 1rem" }}>
          <a
            className="smoothscroll nav-link"
            href="#home"
            onClick={e => handleSectionClick(e, "home")}
          >Home</a>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <a
            className="smoothscroll nav-link"
            href="#about"
            onClick={e => handleSectionClick(e, "about")}
          >About</a>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <a
            className="smoothscroll nav-link"
            href="#resume"
            onClick={e => handleSectionClick(e, "resume")}
          >Resume</a>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <a
            className="smoothscroll nav-link"
            href="#contact"
            onClick={e => handleSectionClick(e, "contact")}
          >Contact</a>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <Link
            className="nav-link"
            to="/references"
            onClick={() => setMenuOpen(false)}
          >References</Link>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <Link
            className="nav-link"
            to="/blogs"
            onClick={() => setMenuOpen(false)}
          >Blogs</Link>
        </li>
      </ul>
      <style>{`
        .nav-link {
          color: #fff !important;
          text-decoration: none !important;
          font-family: inherit !important;
          font-weight: 700 !important;
          font-size: 1.1rem !important;
          letter-spacing: 1px !important;
          padding: ${isMobile ? "0.75rem 0" : "0.5rem 0"} !important;
          display: block !important;
          text-transform: uppercase !important;
        }
        @media (max-width: 768px) {
          .nav-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavigationMenu;
