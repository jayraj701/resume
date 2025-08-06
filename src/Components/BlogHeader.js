import React from "react";
import NavigationMenu from "./NavigationMenu";
import ParticlesBg from "particles-bg";

const BlogHeader = () => (
  <header className="blog-header">
    <ParticlesBg type="circle" bg={true} />
    <h1 className="blog-header-title">Jayraj Nimbalkar</h1>
  </header>
);

const BlogHeaderWithNav = () => (
  <>
    <NavigationMenu />
    <BlogHeader />
  </>
);

export default BlogHeaderWithNav;
