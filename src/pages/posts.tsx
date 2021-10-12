import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

// markup
const PostsPage = ({ location }) => {
  return (
    <Layout>
      <SEO title="Posts" />
      <Hero
        location={location.pathname}
        title="Posts"
        subtitle="See them all"
      />
    </Layout>
  );
};

export default PostsPage;
