import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Spedalotto Florian </span>
            from <span className="purple"> Lyon, France.</span>
            <br />
            With a Master's degree (Bac +5) in Information Systems Engineering, I am currently an Application Project Manager.
            <br />
            <br />
            Where I have had the opportunity to apply my skills. With my three internship experiences, I have developed technical and organizational expertise, as well as a proven ability to lead projects.
            <br />
            <br />
            I am currently seeking new professional challenges and am confident that I can make a significant contribution to the development of your projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Spedalotto</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
