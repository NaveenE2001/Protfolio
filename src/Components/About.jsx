import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Naveen E</b> and I am from Chitradurga, India. I'm
            a <b>FUll Stack Developer</b> completed my{" "}
            <b>MCA in Computer Science</b> at SIT Tumkur. <br />
            <br />
            I love to create projects with beautiful designs and put my own
            twists on it, you can check out some of my work in the projects
            section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
            photography in my spare time.
          </p>
          <a
            href="https://drive.google.com/file/d/1NbncVawCvCwfgx-qpaB1A0Stq5uk6i0N/view?usp=drivesdk"
            download
            className="resume-btn"
          >
            <button>
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="ReactNative" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Python" />
        <Skills skill="Java" />
        <Skills skill="C++" />
        <Skills skill="MySql" />
        <Skills skill="Express" />
      </div>
    </>
  );
};

export default About;
