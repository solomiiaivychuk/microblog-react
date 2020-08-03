import React, { useContext } from "react";
import TweetsContext from "../TweetsContext";
import * as firebase from 'firebase';
import UserNameContext from '../UserNameContext'

const PostItem = () => {
  const userName = useContext(UserNameContext);
  const tweetsContx = useContext(TweetsContext)

  let posts = [];
  
  const postsFromContext = tweetsContx.posts;
  console.log(postsFromContext);
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
