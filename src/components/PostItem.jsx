import React, { useContext } from "react";
import TweetsContext from "../TweetsContext";
import * as firebase from 'firebase';
import UserContext from '../UserContext'

const PostItem = () => {
  const userContext = useContext(UserContext);
  const tweetsContx = useContext(TweetsContext)

  let posts = [];
  
  const postsFromContext = tweetsContx.posts;
  console.log(postsFromContext);
  console.log(userContext.name);
  for (let post of postsFromContext) {
    posts.push(post);
  }
  
  return postsFromContext.map((post) => (
    <div key={post.id} className="card rounded post-item">
      <div className="post-author">{post.userName}</div>
      <div className="post-text">{post.content}</div>
      <div className="post-date">{post.date}</div>
    </div>
  ));
};

export default PostItem;
