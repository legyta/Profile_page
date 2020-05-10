import React from "react";
import "./stylesheets/portfolio.scss";
import { Card, Button } from "react-bootstrap";
import sissy from "./images/sissy.PNG";
import photoGuide from "./images/photoGuide.PNG";
import sloth from "./images/sloth.PNG";
import birthday from "./images/birthday.PNG";
import groenhartig from "./images/groenhartig.PNG";

function Portfolio() {
  return (
    <div className="portfolio-section">
      <h1>Check out my work:</h1>

      <div className="row1">
        <Card className="card5">
          <Card.Img variant="top" src={birthday} />
          <Card.Body>
            <Card.Title className="card-title">Happy Birthday</Card.Title>
            <Card.Text>
              Demo of birthday web app for my sister. Learnt:
              <li>- Using external libraries</li>
              <li>- Refreshed memory on Routing</li>
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

        <Card className="card4">
          <Card.Img variant="top" src={groenhartig} />
          <Card.Body>
            <Card.Title className="card-title">Groenhartig</Card.Title>
            <Card.Text>
              Wordpress site for organic farm of a friend. Learnt:
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
      </div>
      <div className="row2">
        <Card className="card3">
          <Card.Img variant="top" src={sissy} />
          <Card.Body>
            <Card.Title className="card-title">Animals Who Read</Card.Title>
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

        <Card className="card2">
          <Card.Img variant="top" src={photoGuide} />
          <Card.Body>
            <Card.Title>Amsterdam Photo Guide</Card.Title>
            <Card.Text className="card-text">
              1st group project. Learnt:
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

        <Card className="card1">
          <Card.Img variant="top" src={sloth} />
          <Card.Body>
            <Card.Title>5 Day Coding Challenge</Card.Title>
            <Card.Text>
              Creating one html/css project for 5 days. Learnt:
              <li>- Bootstrap</li>
              <li>- Required inputs for forms</li>
              <li>- Adding videos</li>
            </Card.Text>
            <Button
              className="sloth-button"
              href="https://github.com/legyta/5-day-coding-challenge"
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
