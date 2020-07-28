import React from "react";

const PostItem = (props) => {
  return (
    <div className="card shadow rounded post-item">
      <div className="post-author">{props.post.userName}</div>
      <div className="post-text">{props.post.content}</div>
      <div className="post-date">{props.post.date}</div>
    </div>
  );
}

export default PostItem;
