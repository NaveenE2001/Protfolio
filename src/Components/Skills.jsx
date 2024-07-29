import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
FaMobile,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaPython,
  FaJava,
  FaDatabase,
  FaNodeJs,
  
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
ReactNative: <FaMobile />,
    "C++": <CgCPlusPlus />,
    React: <FaReact />,
    Python: <FaPython />,
    Java: <FaJava />,
    MySql: <FaDatabase />,
    Express: <FaNodeJs />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
