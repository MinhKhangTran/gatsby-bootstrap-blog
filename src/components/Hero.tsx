import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <StaticImage src="../images/home.png" alt="hero" />
      <div className="hero_stuff text-center">
        <h1 className="hero_title display-2">The Blog</h1>
        <h2 className="hero_subtitle display-5">Write Ideas</h2>
      </div>
    </section>
  );
};

export default Hero;
