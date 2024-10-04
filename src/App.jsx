import React, { useEffect, useState } from "react";
import avatar from "./assets/img/avatar.webp";
import profile from "./assets/img/profile1.png";
import arrowDown from "./assets/img/arrow-down.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import htmlIcon from "./assets/img/html.png";
import cssIcon from "./assets/img/css.png";
import jsIcon from "./assets/img/javascript.png";
import reactIcon from "./assets/img/reactjs.png";
import nodejsIcon from "./assets/img/nodejs.png";
import awsIcon from "./assets/img/aws.png";
import mysqlIcon from "./assets/img/mysql.png";
import gitIcon from "./assets/img/git.png";
import bgWave from "./assets/img/bg-wave-4a496675.mp4";

import "./App.css";

function App() {
  // Scroll detection
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 50) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="">
        {/* Navbar */}
        <nav
          className={`navbar fixed-top navbar-expand-lg navbar-light darker-bg ${
            activeSection != "introduction" ? "header-shadow" : ""
          }`}
        >
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
                    className={`nav-link ${
                      activeSection === "introduction" ? "active" : ""
                    }`}
                    aria-current="page"
                    href="#introduction"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeSection === "about" ? "active" : ""
                    }`}
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeSection === "experience" ? "active" : ""
                    }`}
                    href="#experience"
                  >
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeSection === "project" ? "active" : ""
                    }`}
                    aria-current="page"
                    href="#project"
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeSection === "connect" ? "active" : ""
                    }`}
                    href="#connect"
                  >
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
              <div className="col-xl-6 col-md-7 col-sm-12 my-3">
                <h1>Hi! I&apos;m</h1>
                <h1>Khanh Phuc Thinh Nguyen</h1>
                <h5>Frontend Developer</h5>
                <p>Sophomore at Swinburne University of Technology</p>
                <p>
                  I love creating creative websites about games and anime. I'm
                  also interested in IoT programming and exploring ways to
                  combine these two fields.
                </p>
                {/* Music */}
                <div
                  className="music-player mb-4 d-flex"
                  style={{ backgroundColor: "#F1F3F4" }}
                >
                  <audio controls autoPlay loop>
                    <source src="#" type="audio/mpeg" />
                  </audio>
                  <marquee direction="left" className="align-self-center">
                    Jar of Love - WantingsMusic
                  </marquee>
                </div>
              </div>
              {/* Avatar */}
              <div className="col-xl-6 col-md-5 col-sm-12">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img className="avatar img-fluid" src={avatar} alt="Avatar" />
                  {/* Button */}
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-secondary my-3"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                          "https://drive.google.com/file/d/1PwEdtD9s1wSHjLiEMr8U1dtPdJm3fCw8/view?usp=drive_link";
                      }}
                    >
                      Download Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <div className="float-animation opacity-50 py-3">
                  <a href="#about">
                    <img src={arrowDown} alt="Arrow down" width={50} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About me */}
        <section className="about py-xl-8" id="about">
          <div className="container">
            <h2 className="text-center mt-3">About Me</h2>
            <div className="row">
              <div className="col">
                <p>
                  I am a beginner in frontend development. I have recently
                  completed several projects related to my skills, but most were
                  simple and not comparable to real-world projects. I am seeking
                  internships to further enhance my programming skills and
                  advance my journey toward becoming a skilled web developer. I
                  am excited to gain hands-on experience through real-life
                  projects and contribute meaningfully to a company's growth and
                  success.
                </p>
              </div>
            </div>
            {/* Tags */}
            <div className="d-flex justify-content-center align-items-center">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary tag"
              >
                Internet of Things
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary tag"
              >
                Web Development
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary tag"
              >
                Cloud Computing
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary tag"
              >
                Database
              </button>
            </div>
          </div>
        </section>
        {/* About me */}
        <section className="skills">
          <div className="container">
            <h2 className="text-center pb-4 mt-3">Skills</h2>
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
              {/* <div className="col-sm d-flex justify-content-center align-items-center skillFrame">
                <img className="skillIcon" src={nodejsIcon} alt="NodeJS" />
              </div> */}
              <div className="col-sm d-flex justify-content-center align-items-center skillFrame">
                <img className="skillIcon" src={gitIcon} alt="Git" />
              </div>
              {/* <div className="col-sm d-flex justify-content-center align-items-center skillFrame">
                <img className="skillIcon" src={awsIcon} alt="AWS" />
              </div> */}
              <div className="col-sm d-flex justify-content-center align-items-center skillFrame">
                <img className="skillIcon" src={mysqlIcon} alt="MySQL" />
              </div>
            </div>
          </div>
        </section>
        {/* Timeline */}
        <section className="bsb-timeline-1 py-xl-8" id="experience">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-6 col-sm-12">
                <h2 className="text-center pb-5 mt-3">Education</h2>
                <div className="row justify-content-center">
                  <div className="col-10 col-md-8 col-xl-6">
                    <ul className="timeline">
                      <li className="timeline-item">
                        <div className="timeline-body">
                          <div className="timeline-content pb-4">
                            <div className="card border-0">
                              <div className="zoom card-body p-3 border border-secondary rounded">
                                <h6 className="card-subtitle text-secondary mb-1">
                                  September 2022 - Present
                                </h6>
                                <h5 className="card-title mb-2">
                                  Swinburne University of Technology
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-10 col-md-8 col-xl-6">
                    <ul className="timeline">
                      <li className="timeline-item pb-4">
                        <div className="timeline-body">
                          <div className="timeline-content">
                            <div className="card border-0">
                              <div className="zoom card-body p-3 border border-secondary rounded">
                                <h6 className="card-subtitle text-secondary mb-1">
                                  June 2018 - June 2022
                                </h6>
                                <h5 className="card-title mb-2">
                                  Mac Dinh Chi High School
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-md-6 col-sm-12">
                <h2 className="text-center pb-5 mt-3">Work Experience</h2>
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
                                <h4 className="card-title mb-3">
                                  IT Lab Assistant
                                </h4>
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
            </div>
          </div>
        </section>
        {/* end of Timeline */}
        {/* Projects */}
        <section className="projects darker-bg pb-5" id="project">
          <div className="container pt-3">
            <h2 className="text-center pt-5 pb-2 mt-3">
              Check out my projects
            </h2>
            <div className="album py-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-4 project-shadow">
                      <img
                        className="bd-placeholder-img card-img-top"
                        src="https://raw.githubusercontent.com/PancakesLmao/COS10005-Web-development/main/overview.png"
                        alt="Project 1"
                        width="100%"
                        height="225"
                      />
                      <div className="card-body">
                        <p className="d-flex align-items-center text-secondary">
                          <FaCalendarAlt />
                          &nbsp;November 2023
                        </p>
                        <h5 className="card-title">BeijingStore</h5>
                        <p className="card-text">
                          My first e-commerce webpage using HTML, CSS and
                          JavaScript.
                        </p>
                        {/* project tags */}
                        <div className=" justify-content-start align-items-center">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary project-tag"
                          >
                            HTML
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary project-tag"
                          >
                            CSS
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary project-tag"
                          >
                            JavaScript
                          </button>
                        </div>
                        {/* repo */}
                        <div className="d-flex justify-content-between align-items-center">
                          <u className="social-list d-flex justify-content-start">
                            <li>
                              <a
                                href="https://pancakeslmao.github.io/COS10005-Web-development/"
                                className=""
                              >
                                <GrView className="git-repo" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://github.com/PancakesLmao/COS10005-Web-development"
                                className=""
                              >
                                <TbBrandGithubFilled className="git-repo" />
                              </a>
                            </li>
                          </u>
                          <small className="text-muted">Individual</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-4 project-shadow">
                      <img
                        className="bd-placeholder-img card-img-top"
                        src="https://camo.githubusercontent.com/cdf91fd6cc98e66c95e3c8e021a04a31ac38febd5bfef55ad2cd5ffac7055839/68747470733a2f2f736e6970626f6172642e696f2f73396f5641772e6a7067"
                        alt="Project 1"
                        width="100%"
                        height="225"
                      />
                      <div className="card-body">
                        <p className="d-flex align-items-center text-secondary">
                          <FaCalendarAlt />
                          &nbsp;March 2024
                        </p>
                        <h5 className="card-title">
                          Decentralized Exchange Platform
                        </h5>
                        <p className="card-text">
                          This is my first project using ReactJS, where me and
                          my team developed a simple Decentralized Exchange
                          Platform leveraging blockchain technology for
                          peer-to-peer asset transfers.
                        </p>
                        {/* project tags */}
                        <div className=" justify-content-start align-items-center">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary project-tag"
                          >
                            ReactJS
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary project-tag"
                          >
                            ExpressJS
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary project-tag"
                          >
                            Blockchain
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary project-tag"
                          >
                            PostgreSQL
                          </button>
                        </div>
                        {/* repo */}
                        <div className="d-flex justify-content-between align-items-center">
                          <u className="social-list d-flex justify-content-start">
                            <li>
                              <a
                                href="https://asiandexmurphy.vercel.app/"
                                className=""
                              >
                                <GrView className="git-repo" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://github.com/asianmurphyCo/Decentralized-Trading-Platform"
                                className=""
                              >
                                <TbBrandGithubFilled className="git-repo" />
                              </a>
                            </li>
                          </u>
                          <small className="text-muted">Team size: 4</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-4 project-shadow">
                      <img
                        className="bd-placeholder-img card-img-top"
                        src="https://raw.githubusercontent.com/PancakesLmao/SWB-Weather-Dashboard/main/weather%20dashboard.png"
                        alt="Project 1"
                        width="100%"
                        height="225"
                      />
                      <div className="card-body">
                        <p className="d-flex align-items-center text-secondary">
                          <FaCalendarAlt />
                          &nbsp;May 2024
                        </p>
                        <h5 className="card-title">Weather Dashboard</h5>
                        <p className="card-text">
                          A weather dashboard that allows Swinburne students to
                          check the weather on their campus. Data is collected
                          from the weather station itself.
                        </p>
                        {/* project tags */}
                        <div className=" justify-content-start align-items-center">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary project-tag"
                          >
                            ReactJS
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary project-tag"
                          >
                            ExpressJS
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary project-tag"
                          >
                            DynamoDB
                          </button>
                        </div>
                        {/* repo */}
                        <div className="d-flex justify-content-between align-items-center">
                          <u className="social-list d-flex justify-content-start">
                            <li>
                              <a href="#!" className="">
                                <GrView className="git-repo" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://github.com/asianmurphyCo/Weather-Dashboard"
                                className=""
                              >
                                <TbBrandGithubFilled className="git-repo" />
                              </a>
                            </li>
                          </u>
                          <small className="text-muted">Team size: 2</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-4 project-shadow">
                      <img
                        className="bd-placeholder-img card-img-top"
                        src="https://raw.githubusercontent.com/asianmurphyCo/Weather-Station-Edge/main/20240316_134721.jpg"
                        alt="Project 1"
                        width="100%"
                        height="225"
                      />
                      <div className="card-body">
                        <p className="d-flex align-items-center text-secondary">
                          <FaCalendarAlt />
                          &nbsp;May 2024
                        </p>
                        <h5 className="card-title">Weather Station</h5>
                        <p className="card-text">
                          Weather station runs IoT devices to collect data from
                          a weather station
                        </p>
                        {/* project tags */}
                        <div className="d-flex justify-content-start align-items-center">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary project-tag"
                          >
                            IoT
                          </button>
                        </div>
                        {/* repo */}
                        <div className="d-flex justify-content-between align-items-center">
                          <u className="social-list d-flex justify-content-start">
                            <li>
                              <a
                                href="https://github.com/asianmurphyCo/Weather-Station-Edge"
                                className=""
                              >
                                <TbBrandGithubFilled className="git-repo" />
                              </a>
                            </li>
                          </u>
                          <small className="text-muted">Team size: 3</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-4 project-shadow">
                      <img
                        className="bd-placeholder-img card-img-top"
                        src="https://images.viblo.asia/8258af92-2681-460f-b49a-c22de88288da.png"
                        alt="Project 1"
                        width="100%"
                        height="225"
                      />
                      <div className="card-body">
                        <p className="d-flex align-items-center text-secondary">
                          <FaCalendarAlt />
                          &nbsp;May 2024
                        </p>
                        <h5 className="card-title">IoT Dashboard</h5>
                        <p className="card-text">
                          A platform that allow users to view their
                          devices&apos; data
                        </p>
                        {/* project tags */}
                        <div className=" justify-content-start align-items-center">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary project-tag"
                          >
                            NextJS
                          </button>

                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary project-tag"
                          >
                            MongoDB
                          </button>
                        </div>
                        {/* repo */}
                        <div className="d-flex justify-content-between align-items-center">
                          <u className="social-list d-flex justify-content-start">
                            <li disabled>
                              <a href="#!" className="">
                                <GrView className="git-repo" />
                              </a>
                            </li>
                            <li>
                              <a href="#!" className="">
                                <TbBrandGithubFilled className="git-repo" />
                              </a>
                            </li>
                          </u>
                          <small className="text-muted">Team size: 5</small>
                        </div>
                      </div>
                      <span className="badge text-bg-primary">
                        Under development
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Activity slides */}
        <section className="container my-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 col-sm-12 pe-5">
              <h2 className="pb-2 mt-4">Activities</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="col-xl-8 col-md-8 col-sm-12">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-6/436310275_829197402599809_3396840890144712581_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH2VwX4F4rBdUQH5xMUUkjfO8n1NB_xMHA7yfU0H_EwcBMkFI2DiFRBTJZuzGzRExZNX4gNXZfdh8antcbzQblp&_nc_ohc=O8bSkQLfHCsQ7kNvgGXkgKp&_nc_ht=scontent.fsgn6-1.fna&_nc_gid=AD2nzEhjBnjZjYbv1xKLDh5&oh=00_AYD2Y3WT-u7i1Yqm10rPUEMNKY_aq5NSn7WnF6y5sj6IQg&oe=6704AB45"
                      className="d-block w-100"
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                      }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://scontent.fsgn12-1.fna.fbcdn.net/v/t39.30808-6/441925982_829197249266491_1953613101969720193_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHGWZi6mGt1FpCnePnVJ6TLt8CYYaH2BVK3wJhhofYFUpwQjpUbIGgf9Ayu047UpfU9FUANgQ7wPxEtkqTufMFa&_nc_ohc=qmZTrZkRAWoQ7kNvgEabzNw&_nc_ht=scontent.fsgn12-1.fna&_nc_gid=AHhfAP-v-dlHvW3Dbn6EqVh&oh=00_AYBP3Tkxo9WYLB7FiHWVeyJUVM5F3B30q_C37YmQdinXig&oe=670496FB"
                      className="d-block w-100"
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                      }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-6/440606855_829197129266503_5491288342302695310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGnshCVBRWXgB9_FmYPdKnlr9jG1tCP0m-v2MbW0I_Sb9Eu7kqW3634AIi1Lz14xHmn-4TYvsVh3_zGpjhkfTq6&_nc_ohc=_yr9FT3Epn8Q7kNvgFtlDQ2&_nc_ht=scontent.fsgn6-1.fna&_nc_gid=ASDxz78-1Ss8Q9-_anRKD-A&oh=00_AYCyOzks87ilNdAAWFRQHLnYzxEvj9Au0ArKPgWilCwn_w&oe=6704991E"
                      className="d-block w-100"
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                      }}
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <div id="section-gradient"></div>
        <footer
          className="text-center text-lg-start text-dark pt-4"
          id="connect"
          style={{ backgroundColor: "#F1F3F4", position: "relative" }}
        >
          {/* Social media */}
          <section className="py-5">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-4 col-lg-4 col-xl-5 mx-auto mb-4">
                  <div>
                    <h4 className="text-uppercase fw-bold">PancakesLmao</h4>
                    <hr
                      className="mb-3 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "190px",
                        backgroundColor: "#7c4dff",
                        height: "2px",
                      }}
                    />
                    <u className="social-list d-flex justify-content-sm-center justify-content-md-start justify-content-lg-start justify-content-xl-start">
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=100015304028967"
                          className=""
                        >
                          <FaFacebookF className="social-icon" />
                        </a>
                      </li>
                      {/* <li>
                        <a href="#!" className="">
                          <FaDiscord className="social-icon" />
                        </a>
                      </li> */}
                      <li>
                        <a
                          href="https://linkedin.com/in/khanh-phuc-thinh-nguyen-a216b928b"
                          className=""
                        >
                          <FaLinkedinIn className="social-icon" />
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/PancakesLmao" className="">
                          <TbBrandGithubFilled className="social-icon" />
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="">
                          <IoEllipsisHorizontal className="social-icon" />
                        </a>
                      </li>
                    </u>
                  </div>
                </div>

                <div className="col-md-5 col-lg-5 col-xl-4 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Other networks</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "100px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  {/* <p>
                    <FaDiscord />
                    &nbsp;
                    <a href="#!" className="text-dark">
                      pancakeslmao2902
                    </a>
                  </p> */}
                </div>

                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">
                    Contact information
                  </h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "130px",
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
            className="text-center p-3 text-dark"
            style={{ backgroundColor: "transparent" }}
          >
            © 2024&nbsp;
            <a className="text-dark" href="#">
              Portfolio Website
            </a>
            &nbsp;designed by <strong>PancakesLmao</strong>
          </div>
          <video
            className="video-bg"
            style={{
              width: "100%",
              height: "25vh",
              objectFit: "cover",
              position: "absolute",
              mixBlendMode: "difference",
              bottom: 0,
              left: 0,
              zIndex: 1,
            }}
            autoPlay
            loop
            muted
          >
            <source src={bgWave} />
          </video>
        </footer>
      </div>
    </>
  );
}

export default App;
