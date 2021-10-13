import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React from "react";

const Hero = ({
  title,
  subtitle,
  location,
}: {
  title: string;
  subtitle: string;
  location: string;
}) => {
  return (
    <section id="hero">
      {location === "/" && (
        <StaticImage src="../images/home.png" alt="hero home" />
      )}
      {location === "/about" && (
        <StaticImage src="../images/about.png" alt="hero about" />
      )}
      {location === "/posts" && (
        <StaticImage src="../images/posts.png" alt="hero posts" />
      )}
      {location === "/contact" && (
        <StaticImage src="../images/contact.png" alt="hero contact" />
      )}

      <div className="hero_stuff text-center">
        <h1 className="hero_title display-2">{title}</h1>
        <h2 className="hero_subtitle display-5">{subtitle}</h2>
      </div>
    </section>
  );
};

export default Hero;
