import React from "react";
import "./about.css";
import ME from "../../assets/fbpfp.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>

      <div className="about">
        <h2>About me</h2>
      </div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me picture" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {/* Decorated Icons */}
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years of Working Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ World Wide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            GOTTA SAY SOMETHING HERE
          </p>

          <a href="contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
