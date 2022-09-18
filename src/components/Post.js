import Markdown from "markdown-to-jsx";
import { useState } from "react";
import blogMetadata from "../blog-metadata.json";
import { Navigate, useParams } from "react-router-dom";
import "./components.css";
import { PostHeader } from "./PostHeader";

export const Post = () => {
  const [postContent, setPostContent] = useState("##Default Text");
  const validId = parseInt(useParams().id);
  if (!validId) {
    return <Navigate to="/404" />;
  }
  const fetchedPost = {};
  let blogExists = false;
  blogMetadata.forEach((metadata, index) => {
    if (validId === metadata.id) {
      fetchedPost.title = metadata.title ? metadata.title : "No title given";
      fetchedPost.date = metadata.date ? metadata.date : "No date given";
      fetchedPost.author = metadata.author
        ? metadata.author
        : "No author given";
      fetchedPost.path = metadata.path ? metadata.path : "No content given";
      blogExists = true;
    }
  });
  if (blogExists === false) {
    return <Navigate to="/404" />;
  }
  import(`../markdown/${fetchedPost.path}`).then((res) => {
    fetch(res.default)
      .then((response) => response.text())
      .then((response) => setPostContent(response))
      .catch((err) => console.log(err));
  });

  return (
    <article className="page-container">
      <div className="post-wrapper">
        <PostHeader title={fetchedPost.title} author={fetchedPost.author} />
        <Markdown>{postContent}</Markdown>
      </div>
    </article>
  );
};
