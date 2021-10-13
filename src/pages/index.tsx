import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { graphql } from "gatsby";
import BlogPosts from "../components/BlogPosts";

export interface IBlogpost {
  allGraphCmsPost: {
    nodes: [
      {
        author: { name: string; remoteId: string };
        date: string;
        excerpt: string;
        id: string;
        slug: string;
        title: string;
        tags: [string];
      }
    ];
  };
}

// markup
const IndexPage = ({ location, data }) => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <Hero
        location={location.pathname}
        title="The Blog"
        subtitle="Write Ideas"
      />
      <BlogPosts home posts={data} />
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
          remoteId
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

export default IndexPage;
