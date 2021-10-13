import { graphql, Link, navigate } from "gatsby";
import React from "react";
import { Badge, Button } from "react-bootstrap";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IPost {
  graphCmsPost: {
    author: { name: string; remoteId: string };
    content: { raw: any };
    coverImage: { gatsbyImageData: any };
    tags: [string];
    title: string;
    date: string;
  };
}

const SinglePost = ({ data, location }: { data: IPost; location: any }) => {
  return (
    <Layout>
      <SEO title={data.graphCmsPost.title} />

      <section className="post mt-5">
        <Button
          className=" mb-3"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </Button>
        <div className="wrapper text-center">
          <GatsbyImage
            image={getImage(data.graphCmsPost.coverImage.gatsbyImageData)}
            alt={data.graphCmsPost.title}
          />
        </div>
        <div className="text-center ">
          <h1 className="hero_title display-5 mt-4">
            {data.graphCmsPost.title}
          </h1>
          <p className="muted">
            Posted by{" "}
            <Link to={`/${data.graphCmsPost.author.remoteId}`}>
              {data.graphCmsPost.author.name}
            </Link>{" "}
            on {data.graphCmsPost.date}
          </p>
        </div>
        <article className="mt-5 ">
          <RichText content={data.graphCmsPost.content.raw} />
        </article>
        {data.graphCmsPost.tags.map((tag) => {
          return <Badge className="mb-5 me-2">{tag}</Badge>;
        })}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($slug: String!) {
    graphCmsPost(slug: { eq: $slug }) {
      author {
        name
        remoteId
      }
      tags
      title
      coverImage {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
      content {
        raw
      }
      date
    }
  }
`;

export default SinglePost;
