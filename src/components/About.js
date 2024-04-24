import React from "react";
import aboutPhoto from "./images/aboutPhoto.JPG";
import work from "./images/work2.jpg";
import feather from "./images/feather.svg";
import "./stylesheets/about.css";

function About() {
  return (
    <div className="about-section">
      <div className="about-hi-img">
        <div className="about-hi">
          <h1>Hi!</h1>
        </div>
        <img className="aboutImage" src={aboutPhoto} alt="profile" />
        <div className="about-name">
          {" "}
          <p>
            My name is Ligita and I develop websites on freelance basis.
            <br></br>
            <br></br>I also guide through the journey of building the website
            yourself.
          </p>
        </div>{" "}
      </div>

      <div className="feather">
        <img className="featherImage" src={feather} alt="profile-feather" />
      </div>

      <div className="vision">
        <h2>Mission</h2>
        <p>
          Making personal website is nurturing the idea, contemplating what
          works, reflecting your truth, values and drive towards your goal. It's
          about the process which births the idea and concept with no rush. At
          its own time.
        </p>

        <h2>Vision</h2>
        <p>
          Collaborating with people to bring their potential out for the
          wildest, most creative idea they believe in. <br></br>Using my skills
          to bring this idea into the world.
        </p>

        <h2>Values</h2>
        <p>Flow. Collaboration. Responsibility.</p>
      </div>

      <div className="feather">
        <img className="featherImage1" src={feather} alt="profile-feather" />
      </div>

      <div className="work-section">
        <img className="workImage" src={work} alt="profile-work" />
        <div className="about-work">
          <p>The following is the work I do:</p>
          <ol>
            <li> Building custom coded websites</li>
            <li> Building WordPress sites </li>
            <li> Redesigning the existing projects</li>
            <li> Technical assistance on the existing websites</li>
            <li> Guidance while building site yourself</li>
          </ol>

          <p>I work in English, Spanish, Italian or Lithuanian languages. </p>
        </div>
      </div>

      <h3 className="about-slogan">
        I help you turn the idea of the website into reality!
      </h3>
    </div>
  );
}

export default About;
