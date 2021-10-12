import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

// markup
const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Hero />
    </Layout>
  );
};

export default AboutPage;
