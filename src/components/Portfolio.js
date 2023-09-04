import React from "react";
import "./stylesheets/portfolio.css";
import { Card, Button } from "react-bootstrap";
import sofa from "./images/sofa.PNG";
import sissy from "./images/sissy.PNG";
import mysite from "./images/mysite.jpg";
import dentist from "./images/dentist.png";
import birthday from "./images/birthday.PNG";
import groenhartig from "./images/groenhartig.PNG";
import eva from "./images/eva.PNG";
import emotus from "./images/emotus.PNG";
import "./stylesheets/portfolio.css";
import "./stylesheets/about.css";

function Portfolio() {
  return (
    <div className="portfolio-section">
      <div className="about-hi-portfolio">
        <h1>My work</h1>
      </div>
      <ol className="list-coded">
        <li className="listDescr">
          {" "}
          Custom coded concept to reality development
        </li>
      </ol>

      <div className="row1">
        <Card
          style={{
            // marginRight: "20px",
            border: "solid",
            borderWidth: "0.2rem",
            borderColor: "#fdcf00",
          }}
        >
          <Card.Img variant="top" src={mysite} />
          <Card.Body>
            <Card.Title>Personal Profile</Card.Title>
            <Card.Text>
              <li>Live website</li>
              <li>Custom designed</li>
            </Card.Text>
            <Button
              variant="primary"
              className="sofa-button"
              href="https://superb-wisp-da2b27.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Visit site
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            border: "solid",
            borderWidth: "0.2rem",
            borderColor: "#fdcf00",
            // marginRight: "20px",
          }}
        >
          <Card.Img variant="top" src={dentist} />
          <Card.Body>
            <Card.Title className="card-title">Dentist Profile</Card.Title>
            <Card.Text>
              <li>One-page web sample</li>
              <li>Custom designed</li>
            </Card.Text>
            <Button
              className="sofa-button"
              href="https://nomadentist.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit site{" "}
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div className="row2">
        <Card
          className="cardSofa"
          style={{
            border: "solid",
            borderWidth: "0.2rem",
            borderColor: "#fdcf00",
            // marginRight: "20px",
          }}
        >
          <Card.Img variant="top" src={sofa} />
          <Card.Body>
            <Card.Title className="card-title">Artist Profile</Card.Title>
            <Card.Text>
              <li>Live website</li>
              <li>Custom designed</li>
            </Card.Text>
            <Button
              className="sofa-button"
              href="https://performingforsofas.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit site
            </Button>
          </Card.Body>
        </Card>

        <Card
          className="cardSofa"
          style={{
            // marginRight: "20px",
            border: "solid",
            borderWidth: "0.2rem",
            borderColor: "#fdcf00",
          }}
        >
          <Card.Img variant="top" src={eva} />
          <Card.Body>
            <Card.Title>Psychotherapist Profile</Card.Title>
            <Card.Text>
              <li>Currently offline (back soon)</li>
              <li>Custom drawn icons</li>
            </Card.Text>
            {/* <Button
              variant="primary"
              className="sofa-button"
              href="https://www.evapsychotherapy.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit site
            </Button> */}
          </Card.Body>
        </Card>
      </div>

      <div className="row2">
        <Card
          className="cardSofa"
          style={{
            border: "solid",
            borderWidth: "0.2rem",
            borderColor: "#fdcf00",
            // marginRight: "20px",
          }}
        >
          <Card.Img variant="top" src={birthday} />
          <Card.Body>
            <Card.Title className="card-title">Birthday gift</Card.Title>
            <Card.Text>
              <li>Sample website</li>
              <li>Coloured, fun and creative</li>
            </Card.Text>
            <Button
              className="sofa-button"
              href="https://funstuff.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Visit site{" "}
            </Button>
          </Card.Body>
        </Card>

        <Card
          className="cardSofa"
          style={{
            border: "solid",
            borderWidth: "0.2rem",
            borderColor: "#fdcf00",
            // marginRight: "20px",
          }}
        >
          <Card.Img variant="top" src={sissy} />
          <Card.Body>
            <Card.Title className="card-title">Sissy The Panda</Card.Title>
            <Card.Text>
              <li>Live website</li>
              <li>Group project at dev course</li>
            </Card.Text>
            <Button
              className="sofa-button"
              href="https://sissythepanda.netlify.com"
              target="_blank"
              rel="noreferrer"
            >
              Visit site
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div className="wordpress">
        <ol className="list-coded">
          <li>WordPress websites</li>
        </ol>
      </div>

      <div className="row2">
        <Card
          className="card3 cardWP"
          style={{
            border: "solid",
            borderWidth: "0.2rem",
            borderColor: "#fdcf00",
            height: "28rem",
          }}
        >
          <Card.Img variant="top" src={emotus} />
          <Card.Body>
            <Card.Title className="card-title">
              Psychology practice in Amsterdam
            </Card.Title>
            <Card.Text>
              <li>Currently redesigning the website</li>
              <li>Colaborated developing the site</li>
            </Card.Text>
            <Button
              className="sofa-button"
              href="https://emotus.care/"
              target="_blank"
              rel="noreferrer"
            >
              Visit site
            </Button>
          </Card.Body>
        </Card>

        <Card
          className="card2 cardWP"
          style={{
            border: "solid",
            borderWidth: "0.2rem",
            borderColor: "#fdcf00",
            height: "28rem",
          }}
        >
          <Card.Img variant="top" src={groenhartig} />
          <Card.Body>
            <Card.Title className="card-title">
              Organic vegetables farm in Amsterdam
            </Card.Title>
            <Card.Text>
              <li>
                Colaborated in finishing the development and design of the site
              </li>
            </Card.Text>
            <Button
              className="sofa-button"
              href="https://groen-hartig.nl/"
              target="_blank"
              rel="noreferrer"
            >
              Visit site
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="about-hi-contact">
        <h1>Contact</h1>
      </div>
    </div>
  );
}

export default Portfolio;
