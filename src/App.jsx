import { useState } from "react";
import avatar from "./assets/img/avatar.webp";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
        <section className="introduction intro-bg">
          <div className="container mt-3">
            {/*  */}
            <div className="row">
              {/* Greeting */}
              <div className="col-8 col-sm my-3">
                <h1>Hi! I&apos;m</h1>
                <h1>PancakesLmao</h1>
                <p>Frontend Developer</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the.
                </p>
                {/* Music */}
                <div className="music-player mb-3 d-flex">
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
        <section className="about mt-5" id="about">
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
        {/* Timeline */}
        <section className="bsb-timeline-1 py-5 py-xl-8">
          <div className="container">
            <h2 className="text-center">Experiences</h2>
            <div className="row justify-content-center">
              <div className="col-10 col-md-8 col-xl-6">
                <ul className="timeline">
                  <li className="timeline-item">
                    <div className="timeline-body">
                      <div className="timeline-content">
                        <div className="card border-0">
                          <div className="card-body p-0">
                            <h5 className="card-subtitle text-secondary mb-1">
                              Spring 2022
                            </h5>
                            <h3 className="card-title mb-3">
                              First HTML CSS website
                            </h3>
                            <p className="card-text m-0">
                              In the next 3 months, I discovered and learned to
                              use Bootstrap, one of the world’s most popular
                              framework for building responsive, mobile-first
                              sites
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="timeline-item">
                    <div className="timeline-body">
                      <div className="timeline-content">
                        <div className="card border-0">
                          <div className="card-body p-0">
                            <h5 className="card-subtitle text-secondary mb-1">
                              April 2023
                            </h5>
                            <h3 className="card-title mb-3">
                              First Reactjs website
                            </h3>
                            <p className="card-text m-0">
                              My first time using Reactjs, a JavaScript library
                              for building user interfaces or UI components. I
                              learned to use Reactjs to build a website that can
                              be used to trade crypto currency (Decentralized
                              trading platform).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

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
                              Realizing there are many gaps in my knowledge, I
                              decided to join the IT Lab as an assistant to
                              learn more about the field of web developement.
                              Hands on real-life projects would help me
                              understand the field better and improve my skills.
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
        <section className="projects" id="project">
          <div className="container">
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row">
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
          className="bg-body-tertiary text-center text-lg-start"
          id="connect"
        >
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <h2 className="text-center">Contact me via</h2>
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item contact-item">
                <a
                  href="https://github.com/PancakesLmao"
                  className="nav-link px-2 text-body-secondary"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="nav-item contact-item">
                <a
                  href="https://www.linkedin.com/in/khanh-phuc-thinh-nguyen-a216b928b/"
                  className="nav-link px-2 text-body-secondary"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className="nav-item contact-item">
                <a
                  href="#pancakeslmao2902"
                  className="nav-link px-2 text-body-secondary"
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="nav-item contact-item">
                <a
                  href="#updating"
                  className="nav-link px-2 text-body-secondary"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="nav-item contact-item">
                <a
                  href="#updating"
                  className="nav-link px-2 text-body-secondary"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
            <p>© 2024 Copyright: Designed by PancakesLmao</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
