import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const footer = () => {

    return (
        <div className="footer-container">
          <footer>
            <p>© 2020<br/>Milosz Samec</p>
            <div className="social-icons">
              <a href="#"><FaGithub title="Github" color="black" fontSize="2rem"/></a>
              <a href="#"><FaLinkedin title="Linkedin" color="black" fontSize="2rem"/></a>
              <a href="#"><FaFacebook title="Facebook" color="black" fontSize="2rem"/></a>
            </div>
          </footer>
        </div>
    )
}

export default footer;