import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Spedalotto Florian </span>
            from <span className="purple"> Lyon, France.</span>
            <br />
            I am currently a <span className="purple"> Full-Stack Developer </span>and <span className="purple">Technical Project Lead.</span>
            <br />
            <br />
            My technical expertise spans the full development stack, from building responsive frontends with <span className="purple"> ReactJS </span> to implementing robust backend solutions with <span className="purple"> NodeJS </span> and managing <span className="purple"> PostgreSQL/MongoDB </span> databases.
            <br />
            <br />
            What drives me is the intersection of technology and <span className="purple"> public impact.</span> My experience in public service digitalization has taught me the importance of building user-centric solutions while maintaining high technical standards. I'm particularly interested in leveraging emerging <span className="purple"> technologies </span> and <span className="purple">microservices architecture </span> to create scalable, efficient applications.
            <br />
            <br />
            Beyond coding, I'm an avid <span className="purple">Formula 1 </span> enthusiast and <span className="purple"> passionate traveler,</span> always seeking new perspectives and challenges. This mindset has led me to my next adventure: relocating to <span className="purple"> Gothenburg in Summer 2025, </span> where I aim to contribute to Sweden's innovative tech ecosystem while embracing its collaborative work culture.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Let's connect and discuss how we can create impactful digital solutions together!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
