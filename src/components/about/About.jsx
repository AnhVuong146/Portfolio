import React from "react";
import "./about.css";
import ME from "../../assets/fbpfp.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { Button } from "reactstrap";
import jsPDF from "jspdf";
import InternshipResume from "../../assets/InternshipResume.pdf";
import { IoIosSchool } from "react-icons/io";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>

      {/* <div className="about"> */}
      <h2>About me</h2>
      {/* </div> */}

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
              <IoIosSchool className="about__icon" />
              <h5>Evergreen Valley Highschool</h5>
              <small>2014-2018</small>
            </article>

            <article className="about__card">
              <IoIosSchool className="about__icon" />
              <h5>Evergreen Valley Community College</h5>
              <small>2018-2021 </small>
              <br />
              <small>A.S Engineer</small>
            </article>

            <article className="about__card">
              <IoIosSchool className="about__icon" />
              <h5>San Jose Stae University</h5>
              <small>2021-2024 </small>
              <br />
              <small>B.S Software Engineer</small>
            </article>
          </div>

          <p>
            Hello, I'm an undergraduate student at San Jose State University
            marjoring in Software Engineer. I'm currently seeking for any
            internship opportunity to gain knowledge and experence and most of
            all, get hands-on coding experience in team projects and learn from
            any experts or professionals to further expand my skills and
            curriculum to help my self grow for the future of the industry.
          </p>

          <a href={InternshipResume} className="btn btn-primary">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
