import React from "react";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="socials d-flex justify-content-center">
        <a href="#">
          <FaTwitter size="2em" />
        </a>
        <a href="#">
          <FaGithub size="2em" />
        </a>
        <a href="#">
          <FaInstagram size="2em" />
        </a>
      </div>
      <div className="footer text-center">
        <p className="text-teal-400">
          Copyright &copy; BlogIt! {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
