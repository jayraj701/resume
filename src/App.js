import React, { Component } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Blogs from "./Components/Blogs";
import ReferencesPage from "./Components/ReferencesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };   
  }

  getResumeData() {
    $.ajax({
      url: process.env.PUBLIC_URL + "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });

    // Fetch manifest.json if needed
    $.ajax({
      url: process.env.PUBLIC_URL + "/manifest.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        // handle manifest data here
        console.log("Manifest loaded:", data);
      },
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={
              <>
                <Header data={this.state.resumeData.main} />
                <About data={this.state.resumeData.main} />
                <Resume data={this.state.resumeData.resume} />
                <Contact data={this.state.resumeData.main} />
                <Footer data={this.state.resumeData.main} />
              </>
            } />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/references" element={<ReferencesPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
