import React from "react";
import BlogHeaderWithNav from "./BlogHeader";
import BlogFooter from "./BlogFooter";
import { useEffect, useState } from "react";
import $ from "jquery";
import "../css/blogs.css";

const Blogs = () => {
  const [blogProjects, setBlogProjects] = useState([]);

  useEffect(() => {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        if (data && data.portfolio && data.portfolio.projects) {
          setBlogProjects(data.portfolio.projects);
        }
      },
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }, []);

  // Carousel logic for 3 items
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  useEffect(() => {
    if (blogProjects.length > 0) {
      const timer = setInterval(() => {
        setCurrent(c => (c + 1) % blogProjects.length);
      }, 3500);
      return () => clearInterval(timer);
    }
  }, [blogProjects.length]);

  // Get 3 items centered, wrap around
  const getVisibleProjects = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      if (blogProjects.length > 0) {
        items.push(blogProjects[(current + i) % blogProjects.length]);
      }
    }
    return items;
  };


  return (
    <>
      <BlogHeaderWithNav />
      {/* Portfolio carousel section for blogs page */}
      <section id="blogs-portfolio" style={{ background: "#f8f8f8", padding: "60px 0 40px 0" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2 style={{ textAlign: "center", marginBottom: 40 }}>Featured Blog Projects</h2>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            <div style={{ flex: "0 0 20%" }}></div>
            <button onClick={() => setCurrent((current - 1 + blogProjects.length) % blogProjects.length)} style={{ border: "none", background: "none", fontSize: 40, cursor: "pointer", color: "#111", marginRight: 16 }}>&#8592;</button>
            <div style={{ display: "flex", flex: "0 0 60%", justifyContent: "center", gap: 32 }}>
              {getVisibleProjects().map((project, idx) => (
                <a href={project.url} target="_blank" rel="noopener noreferrer" key={idx} style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{
                    background: "#fff",
                    borderRadius: 16,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                    width: 340,
                    minHeight: 320,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 32,
                    transition: "transform 0.2s",
                    cursor: "pointer"
                  }}>
                    <img src={"images/portfolio/" + project.image} alt={project.title} style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 12, marginBottom: 18 }} />
                    <h4 style={{ margin: "12px 0 0 0", fontWeight: 700, fontSize: "1.15rem", textAlign: "center" }}>{project.title}</h4>
                  </div>
                </a>
              ))}
            </div>
            <button onClick={() => setCurrent((current + 1) % blogProjects.length)} style={{ border: "none", background: "none", fontSize: 40, cursor: "pointer", color: "#111", marginLeft: 16 }}>&#8594;</button>
            <div style={{ flex: "0 0 20%" }}></div>
          </div>
        </div>
      </section>
      {/* Technical white paper section below */}
      <section className="blog-whitepaper-section">
        <h2 className="blog-whitepaper-title">Technical White Paper</h2>
        <a
          href="https://jayresume.blob.core.windows.net/resume/Direct_Debit_Payment_Automation_WhitePaper_I.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="blog-whitepaper-img-link"
        >
          <img
            src="images/DDCoverP.png"
            alt="Direct Debit Payment Automation White Paper Cover"
            className="blog-whitepaper-img"
          />
        </a>
        <p style={{ textAlign: "center", maxWidth: 520, margin: "0 auto" }}>
          Download the full white paper for a deep dive into Direct Debit Payment Automation best practices and architecture.
        </p>
      </section>
      <BlogFooter />
    </>
  );
};

export default Blogs;
