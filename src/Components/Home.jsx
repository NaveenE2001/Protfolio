import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/protfolio img.jpg";
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hello there!</h1>
          <h1>
            I'M <b>Naveen E{"                       "}</b>
          </h1>
          <Type />
          <div className="btn" style={{}}>
            <Link to="/About">
              <button>
                About Me
                <BsPerson />
              </button>
            </Link>

            <Link to="/Contact">
              <button>
                Contact <CgPhone />
              </button>
            </Link>
          </div>
        </div>
        <Tilt>
          <img
            className="Avatar"
            src={Avatar}
            alt=""
            style={{ borderRadius: "95%" }}
          />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
