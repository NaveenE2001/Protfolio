import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { ImLinkedin } from "react-icons/im";
ImLinkedin

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/NaveenE2001/" target="_blank">
          <FaGithub />
        </a>
        <a href="https://instagram.com/naveen-e" target="_blank">
          <FaInstagram />
        </a>

        <a href="mailTo:naveenreddye123@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a href="https://www.linkedin.com/in/naveen-e-b046b0234/" target="_blank">
        <ImLinkedin/>
         </a>
      </div>
    </footer>
  );
};

export default Footer;
