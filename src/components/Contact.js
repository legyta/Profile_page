import React from "react";
import "./stylesheets/contact.css";
import { Button } from "react-bootstrap";
import CV from "./images/CV.pdf";
import resume from "./images/resume.PNG";
import { SocialIcon } from "react-social-icons";

function Contact() {
  return (
    <div className="contact-section">
      <div className="resume">
        <p>Check out my&nbsp;</p> <a href={CV}>resume</a>
      </div>
      <h1>Let's connect</h1>
      <div className="social-media">
        <SocialIcon url="http://linkedin.com/in/ligita-montvilaite" />
        <SocialIcon className="git" url="http://github.com/legyta" />
      </div>
    </div>
  );
}

export default Contact;
