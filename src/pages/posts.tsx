import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

// markup
const PostsPage = () => {
  return (
    <Layout>
      <SEO title="Posts" />
      <Hero />
    </Layout>
  );
};

export default PostsPage;
