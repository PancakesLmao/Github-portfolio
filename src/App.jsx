import { useState } from "react";
import avatar from "./assets/img/avatar.webp";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import htmlIcon from "./assets/img/html.png";
import cssIcon from "./assets/img/css.png";
import jsIcon from "./assets/img/javascript.png";
import reactIcon from "./assets/img/reactjs.png";
import nodejsIcon from "./assets/img/nodejs.png";
import awsIcon from "./assets/img/aws.png";
import mysqlIcon from "./assets/img/mysql.png";
import gitIcon from "./assets/img/git.png";

import "./App.css";

function App() {
  return (
    <>
      <div className="">
        {/* Navbar */}
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-body-tertiary">
          <div className="container">
            <a
              className="navbar-brand"
              href="https://pancakeslmao.github.io/github-portfolio/"
            >
              <strong>PancakesLmao</strong>
            </a>
            <button
              data-mdb-collapse-init
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Adjust navbar position here */}
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="#introduction"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#project">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#connect">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Body */}
        {/* Introduction */}
        <section className="introduction darker-bg pt-xl-8" id="introduction">
          <div className="container">
            {/*  */}
            <div className="row">
              {/* Greeting */}
              <div className="col-8 col-sm my-3">
                <h1>Hi! I&apos;m</h1>
                <h1>Khanh Phuc Thinh Nguyen</h1>
                <h5>Frontend Developer</h5>
                <p>Student at Swinburne University of Technology</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the.
                </p>
                {/* Music */}
                <div className="music-player mb-4 d-flex">
                  <audio controls autoPlay loop></audio>
                  <marquee direction="left" className="align-self-center">
                    Jar of Love - WantingsMusic
                  </marquee>
                </div>
                {/* Button */}
                <div>
                  <button type="button" className="btn btn-outline-secondary">
                    Discover More
                  </button>
                </div>
              </div>
              {/* Avatar */}
              <div className="col-4 col-sm">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img className="avatar img-fluid" src={avatar} alt="Avatar" />
                  {/* Button */}
                  <div>
                    <button type="button" className="btn btn-outline-secondary">
                      Download CV
                    </button>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </section>
        {/* About me */}
        <section className="about py-xl-8" id="about">
          <div className="container">
            <h2 className="text-center">About Me</h2>
            <div className="row">
              <div className="col">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* About me */}
        <section className="skills">
          <div className="container">
            <h2 className="text-center pt-1 pb-4">Skills</h2>
            <div className="row">
              <div className="col-sm d-flex justify-content-center align-items-center skillFrame">
                <img className="skillIcon" src={htmlIcon} alt="HTML" />
              </div>
              <div className="col-sm d-flex justify-content-center align-items-center skillFrame">
                <img className="skillIcon" src={cssIcon} alt="CSS" />
              </div>
              <div className="col-sm d-flex justify-content-center align-items-center skillFrame">
                <img className="skillIcon" src={jsIcon} alt="JavaScript" />
              </div>
              <div className="col-sm d-flex justify-content-center align-items-center skillFrame">
                <img
                  className="skillIcon reactIcon"
                  src={reactIcon}
                  alt="ReactJS"
                />
              </div>
              <div className="col-sm d-flex justify-content-center align-items-center skillFrame">
                <img className="skillIcon" src={nodejsIcon} alt="NodeJS" />
              </div>
              <div className="col-sm d-flex justify-content-center align-items-center skillFrame">
                <img className="skillIcon" src={gitIcon} alt="Git" />
              </div>
              <div className="col-sm d-flex justify-content-center align-items-center skillFrame">
                <img className="skillIcon" src={awsIcon} alt="AWS" />
              </div>
              <div className="col-sm d-flex justify-content-center align-items-center skillFrame">
                <img className="skillIcon" src={mysqlIcon} alt="MySQL" />
              </div>
            </div>
          </div>
        </section>
        {/* Timeline */}
        <section className="bsb-timeline-1 py-xl-8" id="experience">
          <div className="container">
            <h2 className="text-center pt-3 pb-5">Work Experience</h2>
            <div className="row justify-content-center">
              <div className="col-10 col-md-8 col-xl-6">
                <ul className="timeline">
                  <li className="timeline-item">
                    <div className="timeline-body">
                      <div className="timeline-content">
                        <div className="card border-0">
                          <div className="card-body p-0">
                            <h5 className="card-subtitle text-secondary mb-1">
                              Spring 2024 - Present
                            </h5>
                            <h3 className="card-title mb-3">
                              Working as IT Lab Assistant
                            </h3>
                            <p className="card-text m-0">
                              Recognizing there are still many gaps in my
                              knowledge, I decided to join the IT Lab as an
                              assistant to deepen my understanding of web
                              development. By working on hands-on, real-life
                              projects I aim to improve my skills and gain
                              practical experience in the field.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* end of Timeline */}
        {/* Projects */}
        <section className="projects darker-bg py-xl-3" id="project">
          <div className="container">
            <h2 className="text-center pt-5">Check out my projects</h2>
            <div className="album py-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      {/* <svg
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                      >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"></rect>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                          Thumbnail
                        </text>
                      </svg> */}
                      <img
                        className="bd-placeholder-img card-img-top"
                        src="https://raw.githubusercontent.com/PancakesLmao/COS10005-Web-development/main/overview.png"
                        alt="Project 1"
                        width="100%"
                        height="225"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          My first webpages using HTML, CSS and JavaScript.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small className="text-muted">Individual</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <img
                        className="bd-placeholder-img card-img-top"
                        src="https://camo.githubusercontent.com/af891c109771ecc3f67433301eb5141124ed8fc9c876905111a15d66776873d4/68747470733a2f2f736e6970626f6172642e696f2f73396f5641772e6a7067"
                        alt="Project 1"
                        width="100%"
                        height="225"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          This is my first project using ReactJS, where me and
                          my team developed a simple Decentralized Trading
                          Platform leveraging blockchain technology for
                          peer-to-peer asset transfers. The frontend is hosted
                          on Vercel, while the backend is built with ExpressJS
                          on Render. We utilized Ganache as a local blockchain
                          and Metamask for wallet integration. As this is our
                          first time working with APIs, the response time may be
                          slower compared to production websites.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Go to Repository
                            </button>
                          </div>
                          <small className="text-muted">Team size: 4</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <img
                        className="bd-placeholder-img card-img-top"
                        src="https://raw.githubusercontent.com/PancakesLmao/SWB-Weather-Dashboard/main/weather%20dashboard.png"
                        alt="Project 1"
                        width="100%"
                        height="225"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small className="text-muted">Team size: 2</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <svg
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                      >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"></rect>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                          Thumbnail
                        </text>
                      </svg>
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer
          className="text-center text-lg-start text-dark"
          id="connect"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          {/* Social media */}
          <section className="p-2">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-3 col-xl-4 mx-auto mb-4">
                  <h4 className="text-uppercase fw-bold">PancakesLmao</h4>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "190px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                </div>

                <div className="col-md-5 col-lg-5 col-xl-4 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Social networks</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "100px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <FaFacebook />
                    &nbsp;
                    <a href="#!" className="text-dark">
                      Nguyễn Thịnh
                    </a>
                  </p>
                  <p>
                    <FaDiscord />
                    &nbsp;
                    <a href="#!" className="text-dark">
                      pancakeslmao2902
                    </a>
                  </p>
                  <p>
                    <FaLinkedin />
                    &nbsp;
                    <a href="#!" className="text-dark">
                      Khanh Phuc Thinh Nguyen
                    </a>
                  </p>
                  <p>
                    <FaGithub />
                    &nbsp;
                    <a href="#!" className="text-dark">
                      PancakesLmao
                    </a>
                  </p>
                  <p>
                    <HiDotsCircleHorizontal />
                    &nbsp;
                    <a href="#!" className="text-dark">
                      Others
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">
                    Contact information
                  </h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "120px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <FaHouse /> Ho Chi Minh city, Vietnam
                  </p>
                  <p>
                    <MdEmail /> phucthin29@gmail.com
                  </p>
                  <p>
                    <FaPhoneAlt /> +84 913 305 835
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2024&nbsp;
            <a className="text-dark" href="#">
              Portfolio Website
            </a>
            &nbsp;designed by PancakesLmao
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
