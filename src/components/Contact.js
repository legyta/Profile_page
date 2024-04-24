import React from "react";
import "./stylesheets/contact.css";
import "./stylesheets/contact.css";
import "./stylesheets/about.css";
import CV from "./images/CV.pdf";
import "./stylesheets/about.css";
import whatsapp from "./images/whatsapp.png";
import mail from "./images/mail.png";
import cvFile from "./images/cvFile.png";
import linkedin from "./images/linkedin.png";
import phone from "./images/phone2.png";

function Contact() {
  return (
    <div>
      <div className="button-form-section">
        <div className="call-section">
          <div className="call-description">
            <p>
              Feel free to book an initial call via the phone icon below, or
              contact me by whatsapp or email. <br></br>
              <br></br>I am happy to talk and see if we can collaborate on your
              website project.
            </p>

            <a
              href="https://calendly.com/ligita-montvilaite/initial-web-call"
              target="_blank"
              rel="noreferrer"
            >
              <img src={phone} className="phone-logo" alt="logo"></img>
            </a>
            <a
              href="https://wa.me/+393513823189"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} className="wa-logo" alt="logo"></img>
            </a>
            <a
              href="mailto:ligita.montvilaite@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mail} className="mail-logo" alt="logo"></img>
            </a>

            <p>
              You can also find me on LinkedIn or see my CV for full profile.{" "}
            </p>

            <a
              href="http://linkedin.com/in/ligita-montvilaite"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} className="linkedin-logo" alt="logo"></img>
            </a>
            <a href={CV} target="_blank" rel="noreferrer">
              <img src={cvFile} className="cv-logo" alt="logo"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
