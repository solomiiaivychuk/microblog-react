import React from "react";

function PostItem (props) {
  return (
    <div className="card shadow rounded post-item">
      <div className="post-author">{props.post.author}</div>
      <div className="post-text">{props.post.text}</div>
      <div className="post-date">{props.post.date}</div>
    </div>
  );
}

export default PostItem;
