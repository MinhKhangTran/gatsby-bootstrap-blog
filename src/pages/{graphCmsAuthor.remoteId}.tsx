import { graphql, Link, navigate } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Button } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IAuthor {
  graphCmsAuthor: {
    posts: [
      { excerpt: string; slug: string; title: string; id: string; date: string }
    ];
    name: string;
    remoteId: string;
    picture: {
      gatsbyImageData: any;
    };
    title: string;
  };
}

const SingleAuthor = ({ data }: { data: IAuthor }) => {
  console.log(data);

  return (
    <Layout>
      <SEO title={data.graphCmsAuthor.name} />
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
            image={getImage(data.graphCmsAuthor.picture.gatsbyImageData)}
            alt={data.graphCmsAuthor.name}
          />
        </div>
        <div className="text-center">
          <h1 className="hero_title display-5 mt-4">
            {data.graphCmsAuthor.name}
          </h1>
          <p className="muted">{data.graphCmsAuthor.title}</p>
        </div>
        {data.graphCmsAuthor.posts.map((posts) => {
          return (
            <article key={posts.id} className="posts my-5">
              <Link to={`/${posts.slug}`}>
                <h3 className="text-teal-600">{posts.title}</h3>
              </Link>
              <p className="lead">{posts.excerpt}</p>
              <p className="fst-italic">{posts.date}</p>
            </article>
          );
        })}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query SingleAuthor($remoteId: ID!) {
    graphCmsAuthor(remoteId: { eq: $remoteId }) {
      posts {
        excerpt
        slug
        title
        date
      }
      name
      remoteId
      picture {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
      title
    }
  }
`;

export default SingleAuthor;
