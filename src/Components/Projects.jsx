import React from "react";
import ProjectBox from "./ProjectBox";
import FilmImage from "../images/mockuper (1).png";
import GymImage from "../images/mockuper.png";
import ColourImage from "../images/mockuper (2).png";
import BackpackImage from "../images/mockuper (3).png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={GymImage} projectName="BloodBank" />
        <ProjectBox projectPhoto={FilmImage} projectName="Dealsdray" />
        <ProjectBox projectPhoto={ColourImage} projectName="ENTNT" />
        <ProjectBox projectPhoto={BackpackImage} projectName="FaceDetection" />
      </div>
    </div>
  );
};

export default Projects;
