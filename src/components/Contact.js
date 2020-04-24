import React from "react";
import "./stylesheets/contact.scss";
import { Button } from "react-bootstrap";
import CV from "./images/CV.pdf";
import { SocialIcon } from "react-social-icons";

function Contact() {
  return (
    <div className="contact-section">
      <a href={CV}> Check out my resume (.pdf) </a>

      <h1>and let's connect</h1>
      <div className="social-media">
        <SocialIcon url="http://linkedin.com/in/ligita-montvilaite" />
        <SocialIcon className="git" url="http://github.com/legyta" />
      </div>
    </div>
  );
}

export default Contact;
