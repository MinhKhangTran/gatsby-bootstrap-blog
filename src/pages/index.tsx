import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

// markup
const IndexPage = ({ location }) => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <Hero
        location={location.pathname}
        title="The Blog"
        subtitle="Write Ideas"
      />
    </Layout>
  );
};

export default IndexPage;
