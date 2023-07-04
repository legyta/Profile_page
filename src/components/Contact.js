import React from "react";
import "./stylesheets/contact.css";
import CV from "./images/CV.pdf";
import resume from "./images/resume.PNG";
import { SocialIcon } from "react-social-icons";
import Form from "./Form";
import "./stylesheets/about.css";

function Contact() {
  return (
    <div>
      <div className="button-form-section">
        <div className="call-section">
          <div className="call-description">
            <p>
              Feel free to book an initial up to one hour call, where we can
              talk and understand if I can be of help with your website project.{" "}
            </p>
          </div>
          <div className="call-button">
            <a
              href="https://calendly.com/ligita-montvilaite/initial-web-call"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">Schedule call</button>
            </a>
          </div>
        </div>

        <div className="form-section">
          <div className="form-description">
            <p>
              If you have any questions, comments or would like to see the price
              list for my work - feel free to leave me a message via the form
              below
            </p>
            <Form />
          </div>
        </div>
      </div>

      <div className="contact-section">
        <p>You can also find me on LinkedIn or see my CV for full profile.</p>
        <div className="social-media">
          <SocialIcon url="http://linkedin.com/in/ligita-montvilaite" />
          <SocialIcon className="git" url="http://github.com/legyta" />
        </div>
        <div className="resume">
          <p>Check out my&nbsp;</p> <a href={CV}>resume</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
