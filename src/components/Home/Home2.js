import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            With a Master's degree in {" "} 
                <b className="purple">
                Information Systems Engineering. 👨‍💻
                </b>  
              <br />
              <br />I bring over 3 years of hands-on experience in full-stack development. Proficient in modern web technologies, I specialize in building scalable applications using 
              <i>
                <b className="purple"> JavaScript, React.js, and NodeJS. </b>
              </i>
              <br />
              <br />
              My expertise extends to developing responsive user interfaces and RESTful APIs, with a foundation in &nbsp;
              <i>
                <b className="purple">software architecture </b> and
                {" "}
                <b className="purple">
                agile methodologies.
                </b>
              </i>
              <br />
              <br />
              Currently focused on modern web frameworks and microservices architecture, I have successfully led multiple projects in <b className="purple">public service digitalization.</b> I am particularly interested in leveraging
              <i>
                <b className="purple">
                  {" "}
                  artificial intelligence to enhance web applications
                </b>
              </i>
              &nbsp; and I stay current with emerging technologies in the field.
              <br />
              <br />
              <i>
              As I prepare for my relocation to Sweden, I am seeking opportunities to contribute my technical expertise to innovative projects while embracing {" "}
                <b className="purple">
                the collaborative Swedish tech ecosystem.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/f-spedalotto/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
