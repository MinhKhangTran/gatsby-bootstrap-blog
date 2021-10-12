import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

// markup
const AboutPage = ({ location }) => {
  return (
    <Layout>
      <SEO title="About" />
      <Hero
        location={location.pathname}
        title="About"
        subtitle="This is what I do"
      />
    </Layout>
  );
};

export default AboutPage;
