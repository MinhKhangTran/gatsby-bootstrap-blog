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
      <section className="contact mt-5">
    <p className="lead">
    Want to get in touch? Fill out the form below and send me a message and I will get back to you as soon as possible!
    </p>
      </section>
    </Layout>
  );
};

export default ContactPage;
