import React from "react";
import aboutPhoto from "./images/aboutPhoto.jpg";
import "./stylesheets/about.scss";

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
      <p>Junior Full Stack Web Developer (currently at bootcamp)</p>
      <div className="about-coding">
        <h1>I'm coding and learning</h1>
      </div>
      <div className="about-techs">
        {" "}
        <div className="about-techs1">
          {" "}
          <li>JavaScript</li>
          <li>React.js</li>
          <li>API</li>
          <li>Redux</li>
        </div>
        <div className="about-techs2">
          <li>Hooks</li>
          <li>Passport.js</li>
          <li>JWT</li>
          <li>Node.js</li>
        </div>
        <div className="about-techs3">
          <li>Express.js</li>
          <li>MySQL</li>
          <li>Firebase</li>
          <li>MongoDb</li>
        </div>
      </div>
    </div>
  );
}

export default About;
