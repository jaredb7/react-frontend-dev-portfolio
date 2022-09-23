import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }
    if (this.props.sharedSkills_nonDev) {
      var skills_nondev = this.props.sharedSkills_nonDev.icons.map(function (skill_nondev, i) {
        return (
            <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i data-icon={skill_nondev.class}
                   className="iconify" style={{fontSize: "320%"}}>
                </i>
                  <p
                      className="text-center"
                      style={{fontSize: "65%", marginTop: "4px"}}
                  >
                    {skill_nondev.name}
                  </p>
              </div>
            </span>
            </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
            <ul className="list-inline mx-auto skill-icon">{skills_nondev}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
