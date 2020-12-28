import React from "react";
import "./stylesheets/portfolio.css";
import { Card, Button } from "react-bootstrap";
import sofa from "./images/sofa.PNG";
import sissy from "./images/sissy.PNG";
import photoGuide from "./images/photoGuide.PNG";
import sloth from "./images/sloth.PNG";
import birthday from "./images/birthday.PNG";
import groenhartig from "./images/groenhartig.PNG";
import research from "./images/research.PNG";
import research_video from "./images/research_video.mp4";
import eva from "./images/eva.PNG";
import "./stylesheets/portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-section">
      <h1>Check out my work:</h1>

      <div className="row1">
        <Card className="card6">
          <Card.Img variant="top" src={sofa} />
          <Card.Body>
            <Card.Title className="card-title">Coming up</Card.Title>
            <Card.Text>
              Projects in development:
              <li>- The Sofa Project (nodejs, reactjs)</li>
              <li>- ActUp (fullstack web app)</li>
              <li>- Collaboration on WP sites</li>
            </Card.Text>
            {/* <Button
              className="eva-button"
              href="https://eva-serra.netlify.app/"
            >
              Check out
            </Button> */}
          </Card.Body>
        </Card>

        <Card className="card5">
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
              className="research-button"
              href="https://www.evapsychotherapy.com/"
            >
              Check out
            </Button>
          </Card.Body>
        </Card>

        <Card className="card4">
          <Card.Img variant="top" src={research} />
          <Card.Body>
            <Card.Title className="card-title">Fullstack website</Card.Title>
            <Card.Text>
              Built for media research project. Learnt:
              <li>- Passing data front to backend</li>
              <li>- Redux (state management)</li>
              <li>- Slider for data recording</li>
            </Card.Text>
            <Button className="birthday-button" href={research_video}>
              Check out
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="row2">
        <Card className="card3">
          <Card.Img variant="top" src={birthday} />
          <Card.Body>
            <Card.Title className="card-title">React.js web app</Card.Title>
            <Card.Text>
              Demo of birthday web app for my sister.
              <li>- Using external libraries</li>
              <li>- Routing</li>
              <li>- Deployment</li>
            </Card.Text>
            <Button
              className="groenhartig-button"
              href="https://funstuff.netlify.app/"
            >
              Check out
            </Button>
          </Card.Body>
        </Card>

        <Card className="card2">
          <Card.Img variant="top" src={groenhartig} />
          <Card.Body>
            <Card.Title className="card-title">Wordpress e-commerce</Card.Title>
            <Card.Text>
              Built for an organic farm of a friend.
              <li>- Working with Wordpress</li>
              <li>- Styling with custom css</li>
              <li>- Power of plugins on WP</li>
            </Card.Text>
            <Button className="sissy-button" href="https://groen-hartig.nl/">
              Check out
            </Button>
          </Card.Body>
        </Card>

        <Card className="card1">
          <Card.Img variant="top" src={sissy} />
          <Card.Body>
            <Card.Title>React + API website</Card.Title>
            <Card.Text className="card-text">
              2nd group project at Wild Code School.
              <li>- Fetching data from API</li>
              <li>- Routing React components</li>
              <li>- Deployment</li>
            </Card.Text>
            <Button
              className="guide-button"
              href="https://sissythepanda.netlify.com"
            >
              Check out
            </Button>
          </Card.Body>
        </Card>
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
