import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

// markup
const ContactPage = ({ location }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Hero
        location={location.pathname}
        title="Contact Me"
        subtitle="Connect with me"
      />
    </Layout>
  );
};

export default ContactPage;
