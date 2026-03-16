import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme";
import SiteAppBar from "./Components/SiteAppBar";
import HeroSection from "./Components/HeroSection";
import ImpactMetrics from "./Components/ImpactMetrics";
import About from "./Components/About";
import WorkExperienceSection from "./Components/WorkExperienceSection";
import SignatureProjectSection from "./Components/SignatureProjectSection";
import ProductsSection from "./Components/ProductsSection";
import SkillsSection from "./Components/SkillsSection";
import EducationSection from "./Components/EducationSection";
import Contact from "./Components/Contact";
import SiteFooter from "./Components/SiteFooter";
import Blogs from "./Components/Blogs";
import ReferencesPage from "./Components/ReferencesPage";

const MainPage = ({ resumeData }) => (
  <>
    <SiteAppBar />
    <HeroSection data={resumeData.main} />
    <ImpactMetrics data={resumeData.main} />
    <About data={resumeData.main} />
    <WorkExperienceSection data={resumeData.resume} />
    <SignatureProjectSection data={resumeData.signatureProject} />
    <ProductsSection data={resumeData} />
    <SkillsSection data={resumeData.resume} />
    <EducationSection data={resumeData.resume} />
    <Contact data={resumeData.main} />
    <SiteFooter data={resumeData.main} />
  </>
);

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/resumeData.json")
      .then((r) => r.json())
      .then((data) => setResumeData(data))
      .catch(console.error);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage resumeData={resumeData} />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/references" element={<ReferencesPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
