import React, { useContext } from "react";
import TweetsContext from "../TweetsContext";

const PostItem = () => {
  const context = useContext(TweetsContext);
  const { posts } = context;
  return posts.map((post) => (
    <div key={post.id} className="card rounded post-item">
      <div className="post-author">{post.userName}</div>
      <div className="post-text">{post.content}</div>
      <div className="post-date">{post.date}</div>
    </div>
  ));
};

export default PostItem;
