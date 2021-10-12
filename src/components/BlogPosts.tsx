import React from "react";
import { IBlogpost } from "../pages";
import { Button } from "react-bootstrap";
import { Link } from "gatsby";

const BlogPosts = ({ posts,home }: { posts: IBlogpost;home?:boolean }) => {
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
      {home &&     <div className="blogposts_button_wrapper d-flex justify-content-end">
        <Link to="/posts">

        
        <Button type="button" className="mb-5">
          All Posts
        </Button>
        </Link>
      </div>}
   
    </div>
  );
};

export default BlogPosts;
