import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import {FaPython} from "react-icons/fa";
import {SiJava} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {SiSqlite} from "react-icons/si";
import {SiCplusplus} from "react-icons/si";
import {SiFlask} from "react-icons/si";
import {ImHtmlFive} from "react-icons/im";
import {FaReact} from "react-icons/fa";
import {SiCss3} from "react-icons/si";
import {SiJavascript} from "react-icons/si";
import {GrOracle} from "react-icons/gr";


const Experience = () => {
  return (
    <section id="Experience">
      <h5> The Skills I Have</h5>

      <div className="experience">
        <h2>My Experience</h2>
      </div>

      <div className=".container experience__container">
        {/* ======================= FRONT END ======================= */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            {/* Display Front End Experience Expertise */}
            <article className="experience__details">
              <ImHtmlFive className="experience__details-icon" />
              <div>
                <h4>HTML </h4>
                <small className="text-light">Experienced </small>
              </div>
            </article>

            <article className="experience__details">
              <SiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>ReactJS </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript </h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>

        {/* ======================= BACK END ======================= */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">

            {/* Display Back End Experience Expertise */}
            <article className="experience__details">
              <SiFlask className="experience__details-icon" />
              <div>
                <h4>Flask </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <GrMysql className="experience__details-icon" />
              <div>
                <h4>MySQL </h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <GrOracle className="experience__details-icon" />
              <div>
                <h4>Oracle </h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <SiSqlite className="experience__details-icon" />
              <div>
                <h4>Sqlite </h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

          </div>
        </div>

        {/* ======================= OTHER LANGUAGE EXPERIENCE ======================= */}
        <div className="experience__frontend">
          <h3>Other Language Experience</h3>
          <div className="experience__content">

            {/* Display OTHER LANGUAGE EXPERIENCE */}
            <article className="experience__details">
              <SiJava className="experience__details-icon" />
              <div>
                <h4>Java </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <FaPython className="experience__details-icon" />
              <div>
                <h4>Python </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiCplusplus className="experience__details-icon" />
              <div>
                <h4>C/C++ </h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Assembly Language </h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
};

export default Experience;
