import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    BloodBankDesc:
      "Engineered a Blood Bank Portal with MUI CSS and MERN stack for centralized blood management Facilitated real-time communication and data handlin.",
    LevelsGithub: "https://github.com/NaveenE2001/blood-bank.git",
    LevelsWebsite: "https://gym-website-pink.vercel.app/",

    DealsdrayDesc:
      "This web app developed by using is MUI CSS and MERN stack for the company Dealsdrey admin page for CRED operation for the products",
    MovieGithub: "https://github.com/NaveenE2001/Dealsdray.git",
    MovieWebsite: "https://film-mania.vercel.app/",

    FaceDetectionDesc:
      "Developed a face detection system using OpenCV Utilized advanced image processing techniques for real-time applications",
    ColourPaletteGithub: "https://github.com/NaveenE2001/projects.git",
    ColourPaletteWebsite: "https://colourpalettegen.netlify.app",

    ENTNTDesc:
      " Created an entertainment website using React and Material-UI Demonstrated expertise in front-end development and responsive design",
    BackpackGithub: "https://github.com/NaveenE2001/Entnt.git",
    BackpackWebsite: "https://landing-page-react-sage.vercel.app/",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        {/* <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a> */}
      </div>
    </div>
  );
};
export default ProjectBox;
