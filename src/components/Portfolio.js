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
import emotus from "./images/emotus.PNG";
import act from "./images/act.PNG";
import "./stylesheets/portfolio.css";
import "./stylesheets/about.css";

function Portfolio() {
  return (
    <div className="portfolio-section">
      {/* <p>Below is the display of the sites I have developed:</p> */}
      <div className="about-hi-portfolio">
        <h1>My work</h1>
      </div>
      <ol className="list-coded">
        <li> Custom coded</li>
      </ol>
      <div className="row2">
        <Card className="card6">
          <Card.Img variant="top" src={sofa} />
          <Card.Body>
            <Card.Title className="card-title">The Sofa Project</Card.Title>
            <Card.Text>
              <li>(Currently in development)</li>
              <li>React.js</li>
              <li>Concept to reality development</li>
            </Card.Text>
            <Button
              className="sofa-button"
              href="https://thesofaproject.netlify.app/"
            >
              Check out
            </Button>
          </Card.Body>
        </Card>
        {/* <Card className="card5">
          <Card.Img variant="top" src={eva} />
          <Card.Body>
            <Card.Title className="card-title">
              Psychotherapist profile
            </Card.Title>
            <Card.Text>
              <li>Currently offline</li>
              {/* <li>EmailJS integration</li>
              <li>Drawing SVG files</li>
              <li>Concept to reality development</li> */}
        {/* </Card.Text> */}
        {/* <Button
              className="eva-button"
              href="https://www.evapsychotherapy.com/"
            >
              Check out
            </Button>
          </Card.Body>
        </Card> */}{" "}
        */
      </div>
      <div className="row2">
        <Card className="card3">
          <Card.Img variant="top" src={birthday} />
          <Card.Body>
            <Card.Title className="card-title">
              Demo of birthday gift
            </Card.Title>
            <Card.Text>
              <li>Using external libraries</li>
              <li>Routing</li>
              <li>Deployment</li>
            </Card.Text>
            <Button
              className="birthday-button"
              href="https://funstuff.netlify.app/"
            >
              Check out
            </Button>
          </Card.Body>
        </Card>

        {/* <Card className="card1">
          <Card.Img variant="top" src={sissy} />
          <Card.Body>
            <Card.Title>Sissy The Panda</Card.Title>
            <Card.Text className="card-text">
              <li>Group project at dev course</li>
              <li>React.js, routing, deployment</li>
              <li>Fetching data from API</li>
            </Card.Text>
            <Button
              className="sissy-button"
              href="https://sissythepanda.netlify.com"
            >
              Check out
            </Button>
          </Card.Body>
        </Card> */}
      </div>
      <div className="wordpress">
        <ol className="list-coded">
          <li>WordPress</li>
        </ol>
      </div>

      <div className="row2">
        {/* <Card className="card3">
          <Card.Img variant="top" src={emotus} />
          <Card.Body>
            <Card.Title className="card-title">
              Psychology practice in Amsterdam
            </Card.Title>
            <Card.Text>
              <li>Collaboration project</li>
              <li>Finalised the style and structure</li>
            </Card.Text>
            <Button className="emotus-button" href="https://emotus.care/">
              Check out
            </Button>
          </Card.Body>
        </Card> */}

        {/* <Card className="card2">
          <Card.Img variant="top" src={groenhartig} />
          <Card.Body>
            <Card.Title className="card-title">
              Organic vegetables farm in Amsterdam
            </Card.Title>
            <Card.Text>
              <li>Collaboration project</li>
              <li>Highly involved in building the site</li>
            </Card.Text>
            <Button
              className="groenhartig-button"
              href="https://groen-hartig.nl/"
            >
              Check out
            </Button>
          </Card.Body>
        </Card> */}
      </div>
      <div className="about-hi-contact">
        <h1>Contact</h1>
      </div>
    </div>
  );
}

export default Portfolio;
