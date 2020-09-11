import React from "react";
import "./stylesheets/portfolio.scss";
import { Card, Button } from "react-bootstrap";
import sissy from "./images/sissy.PNG";
import photoGuide from "./images/photoGuide.PNG";
import sloth from "./images/sloth.PNG";
import birthday from "./images/birthday.PNG";
import groenhartig from "./images/groenhartig.PNG";
import research from "./images/research.PNG";
import research_video from "./images/research_video.mp4";
import eva from "./images/eva.PNG";

function Portfolio() {
  return (
    <div className="portfolio-section">
      <h1>Check out my work:</h1>

      <div className="row1">
        <Card className="card6">
          <Card.Img variant="top" src={eva} />
          <Card.Body>
            <Card.Title className="card-title">Portfolio website</Card.Title>
            <Card.Text>
              Built in React.js for a friend. Learnt:
              <li>- EmailJS integration</li>
              <li>- Drawing SVG files</li>
              <li>- Concept to reality development</li>
            </Card.Text>
            <Button
              className="eva-button"
              href="https://eva-serra.netlify.app/"
            >
              Check out
            </Button>
          </Card.Body>
        </Card>

        <Card className="card5">
          <Card.Img variant="top" src={research} />
          <Card.Body>
            <Card.Title className="card-title">Fullstack website</Card.Title>
            <Card.Text>
              Built for media research project. Learnt:
              <li>- Passing data front to end</li>
              <li>- Redux (state management)</li>
              <li>- Slider for data recording</li>
            </Card.Text>
            <Button className="research-button" href={research_video}>
              Check out
            </Button>
          </Card.Body>
        </Card>

        <Card className="card4">
          <Card.Img variant="top" src={birthday} />
          <Card.Body>
            <Card.Title className="card-title">React.js web app</Card.Title>
            <Card.Text>
              Demo of birthday web app for my sister. Learnt:
              <li>- Using external libraries</li>
              <li>- Routing</li>
              <li>- Practised deployment</li>
            </Card.Text>
            <Button
              className="birthday-button"
              href="https://funstuff.netlify.app/"
            >
              Check out
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="row2">
        <Card className="card3">
          <Card.Img variant="top" src={groenhartig} />
          <Card.Body>
            <Card.Title className="card-title">Wordpress e-commerce</Card.Title>
            <Card.Text>
              Built for an organic farm of a friend. Learnt:
              <li>- Working with Wordpress</li>
              <li>- Styling with custom css</li>
              <li>- Power of plugins on WP</li>
            </Card.Text>
            <Button
              className="groenhartig-button"
              href="https://groen-hartig.nl/"
            >
              Check out
            </Button>
          </Card.Body>
        </Card>

        <Card className="card2">
          <Card.Img variant="top" src={sissy} />
          <Card.Body>
            <Card.Title className="card-title">React + API website</Card.Title>
            <Card.Text>
              2nd group project at Wild Code School. Learnt:
              <li>- Fetching data from API</li>
              <li>- Routing React components</li>
              <li>- Deployment</li>
            </Card.Text>
            <Button
              className="sissy-button"
              href="https://sissythepanda.netlify.com"
            >
              Check out
            </Button>
          </Card.Body>
        </Card>

        <Card className="card1">
          <Card.Img variant="top" src={photoGuide} />
          <Card.Body>
            <Card.Title>HTML/CSS website</Card.Title>
            <Card.Text className="card-text">
              1st website building group project. Learnt:
              <li>- HTML and CSS</li>
              <li>- Responsive web design</li>
              <li>- Basics of JavaScript</li>
            </Card.Text>
            <Button
              className="guide-button"
              href="https://legyta.github.io/firstProject_Amsterdam_photo_guide/index.html"
            >
              Check out
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div className="projects">
        <h1>Projects coming up!</h1>

        <p>Keep an eye on Linkedin</p>
      </div>

      <h1>Previously in life, I have also been</h1>

      <div className="previous-experience">
        <div className="previous-experience1">
          {" "}
          <li>- Global Pricing Analyst</li>
          <li>- Data Analyst Intern</li>
        </div>
        <div className="previous-experience2">
          <li>- Healthcare Comm Intern</li>
          <li>- Pharmaceutical Chemistry Student</li>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;