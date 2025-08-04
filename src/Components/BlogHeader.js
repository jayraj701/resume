import React from "react";
import NavigationMenu from "./NavigationMenu";
import ParticlesBg from "particles-bg";

const BlogHeader = () => (
  <div style={{
    width: "100%",
    minHeight: "220px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }}>
    <ParticlesBg type="circle" bg={true} />
    <h1 style={{
      color: "#fff",
      fontSize: "3rem",
      fontWeight: "bold",
      textShadow: "2px 2px 8px #222",
      margin: 0,
      padding: "40px 0 0 0",
      zIndex: 1
    }}>
      Jayraj Nimbalkar
    </h1>
  </div>
);

const BlogHeaderWithNav = () => (
  <>
    <NavigationMenu />
    <BlogHeader />
  </>
);

export default BlogHeaderWithNav;
