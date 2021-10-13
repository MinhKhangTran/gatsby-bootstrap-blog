import React from "react";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="socials d-flex justify-content-center">
        <a href="https://twitter.com/">
          <FaTwitter size="2em" />
          <span className="visually-hidden">Twitter</span>
        </a>
        <a href="https://github.com/">
          <FaGithub size="2em" />
          <span className="visually-hidden">Github</span>
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram size="2em" />
          <span className="visually-hidden">Instagram</span>
        </a>
      </div>
      <div className="footer text-center">
        <p className="footer_text">
          Copyright &copy; BlogIt! {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
