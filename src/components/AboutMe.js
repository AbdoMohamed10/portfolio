import React from "react";
import photo from "../assets/me2.jpg";
import "./AboutMe.css";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import PhoneIcon from "@material-ui/icons/Phone";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GitHubIcon from "@material-ui/icons/GitHub";

const AboutMe = () => {
  return (
    <div className="about-me row" id="aboutMe">
      <div className="img-box col-md-6">
        <img src={photo} alt="Profile" className="img-fluid" />
      </div>
      <div className="about-box col-md-6">
        <div className="about-info">
          <h1>About Me</h1>
          <p>
            Talented software developer cares for the quality and details,
            looking to enrich my knowledge, gain more experience and learn the
            latest technologies in software development. I enjoy working
            collaboratively but can also run with projects on my own.
          </p>
          <h3>Skills</h3>
          <div className="col-md-12 skills-box">
            <ul className="col-md-6">
              <li>Javascript</li>
              <li>React JS</li>
              <li>React Native</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JQuery</li>
            </ul>

            <ul className="col-md-6">
              <li>PHP</li>
              <li>Laravel</li>
              <li>MySQL</li>
              <li>Java</li>
              <li>GitHub</li>
              <li>Agile</li>
            </ul>
          </div>
          <a
            href="https://abdomohamed10.github.io/portfolio/Abdelrahman%20Mohamed%20Front%20End%20Developer.pdf"
            download
            className="btn btn-outline-dark"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
        {/* <hr /> */}
        {/* <div className="contact-info">
          <h1>Contact Info</h1>
          <p>
            <MailOutlineIcon />{" "}
            <a href="mailto:AbdoMohamed.1022@gmail.com">
              AbdoMohamed.1022@gmail.com
            </a>
          </p>
          <p>
            <PhoneIcon /> 01118721030
          </p>
          <a
            href="https://www.linkedin.com/in/abdelrahman-mohamed-778230175/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/AbdoMohamed10"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default AboutMe;
