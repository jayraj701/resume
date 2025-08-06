import React, { Component } from "react";
// import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <div className="about-modern-card">
          <div className="about-modern-image">
            <img
              className="profile-pic-modern"
              src={profilepic}
              alt="Jayraj Nimbalkar"
            />
          </div>
          <div className="about-modern-content">
            <h2 className="about-modern-title">About Me</h2>
            <p className="about-modern-bio">{bio}</p>
            <div className="about-modern-details">
              <div className="about-modern-contact">
                <h3>Contact Details</h3>
                <ul>
                  <li><strong>Name:</strong> {name}</li>
                  <li><strong>Address:</strong> {street}, {city} {state}, {zip}</li>
                  <li><strong>Phone:</strong> {phone}</li>
                  <li><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></li>
                </ul>
              </div>
              <div className="about-modern-download" style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <a href={resumeDownload} className="about-modern-button" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-download"></i> Download Resume
                </a>
                <a
                  className="libutton"
                  href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=jayrajnimbalkar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
