import React from "react";
import { IBlogpost } from "../pages";
import { Button } from "react-bootstrap";
import { Link } from "gatsby";

const BlogPosts = ({ posts }: { posts: IBlogpost }) => {
  console.log(posts);

  return (
    <div className="blogposts mt-5">
      {posts.allGraphCmsPost.nodes.map((posts) => {
        return (
          <article key={posts.id} className="posts my-5">
            <Link to={`/${posts.slug}`}>
              <h3 className="text-teal-400">{posts.title}</h3>
            </Link>
            <p className="lead">{posts.excerpt}</p>
            <p className="fst-italic">
              Wrote by {posts.author.name} on {posts.date}
            </p>
          </article>
        );
      })}
      <div className="blogposts_button_wrapper d-flex justify-content-end">
        <Button type="button" className="mb-5">
          All Posts
        </Button>
      </div>
    </div>
  );
};

export default BlogPosts;
