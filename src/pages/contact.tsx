import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

// markup
const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Hero />
    </Layout>
  );
};

export default ContactPage;
