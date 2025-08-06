import React, { Component } from "react";
// import Slide from "react-reveal";

class Resume extends Component {
  
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  constructor(props) {
    super(props);
    this.state = { modalWork: null };
  }

  openModal = (work) => {
    this.setState({ modalWork: work });
  };

  closeModal = () => {
    this.setState({ modalWork: null });
  };

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    // Show most recent job first
    const workSorted = [...this.props.data.work].sort((a, b) => {
      // Sort by years string, assuming format: 'Dec 2018 - Present' or similar
      const getStartYear = (w) => {
        const match = w.years.match(/(\w+)?\s?(\d{4})/);
        return match ? parseInt(match[2]) : 0;
      };
      return getStartYear(b) - getStartYear(a);
    });

    const work = workSorted.map((work, idx) => (
      <div className="work-card work-card-large" key={work.company + idx} onClick={() => this.openModal(work)} tabIndex={0} role="button" aria-label={work.company + ' details'}>
        <img className="work-logo" src={work.logo} alt={work.company} />
        <div className="work-card-content">
          <h3>{work.company}</h3>
          <div className="work-title-row">
            <span className="work-title">{work.title}</span>
            <span className="work-years">{work.years}</span>
          </div>
          <div className="work-tech">{work.tech}</div>
          <div className="work-desc work-desc-truncate">{work.description}</div>
        </div>
      </div>
    ));

    // Scroll handlers for arrow buttons
    const scrollWork = (dir) => {
      const el = document.querySelector('.work-scrollbar');
      if (el) {
        el.scrollBy({ left: dir * 340, behavior: 'smooth' });
      }
    };

    // Modern skill tag cloud (no bar chart)
    const skills = this.props.data.skills.map((skill) => (
      <span key={skill.name} className="skill-tag">
        {skill.name}
      </span>
    ));

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="work-scrollbar-wrapper">
              <button className="work-arrow left" onClick={() => scrollWork(-1)} aria-label="Scroll left">&#8592;</button>
              <div className="work-scrollbar">
                {work}
              </div>
              <button className="work-arrow right" onClick={() => scrollWork(1)} aria-label="Scroll right">&#8594;</button>
            </div>
            {this.state.modalWork && (
              <div className="work-modal-overlay" onClick={this.closeModal}>
                <div className="work-modal" onClick={e => e.stopPropagation()}>
                  <button className="work-modal-close" onClick={this.closeModal} aria-label="Close">&times;</button>
                  <img className="work-modal-logo" src={this.state.modalWork.logo} alt={this.state.modalWork.company} />
                  <h2>{this.state.modalWork.company}</h2>
                  <div className="work-title-row">
                    <span className="work-title">{this.state.modalWork.title}</span>
                    <span className="work-years">{this.state.modalWork.years}</span>
                  </div>
                  <div className="work-tech">{this.state.modalWork.tech}</div>
                  <div className="work-desc work-desc-full">{this.state.modalWork.description}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="skill-tag-cloud">
              {skills}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
