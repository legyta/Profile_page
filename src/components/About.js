import React from "react";
import aboutPhoto from "./images/aboutPhoto.jpg";
import "./stylesheets/about.css";

function About() {
  return (
    <div className="about-section">
      <div className="about-hi-img">
        <div className="about-hi">
          <h1>Hi!</h1>
        </div>
        <img src={aboutPhoto} alt="profile-photo" />
        <div className="about-name">
          {" "}
          <p>my name is Ligita</p>
        </div>{" "}
      </div>
      <p>Junior Full Stack JavaScript Web Developer</p>
    </div>
  );
}

export default About;
