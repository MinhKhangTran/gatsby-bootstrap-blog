import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { graphql } from "gatsby";
import BlogPosts from "../components/BlogPosts";

// markup
const PostsPage = ({ location,data }) => {
  return (
    <Layout>
      <SEO title="Posts" />
      <Hero
        location={location.pathname}
        title="Posts"
        subtitle="See them all"
      />
      <BlogPosts posts={data} />
    </Layout>
  );
};

export const query = graphql`
  {
    allGraphCmsPost {
      nodes {
        id
        author {
          name
        }
        date
        excerpt
        slug
        tags
        title
      }
    }
  }
`;


export default PostsPage;
