import React, { useContext } from "react";
import TweetsContext from "../TweetsContext";
import * as firebase from 'firebase';
const PostItem = () => {
  // const context = useContext(TweetsContext);
  // const { posts } = context;
  // console.log(posts);
  
  const tweetsRef = firebase.database().ref('tweets');

  let posts = [];
  tweetsRef.on('value', (snapshot) => {
    let tweetsFromFirestore = snapshot.val();
    for (let tweet in tweetsFromFirestore) {
      posts.push({
        content: tweetsFromFirestore[tweet].content,
        userName: tweetsFromFirestore[tweet].userName,
        date: tweetsFromFirestore[tweet].date,
        id: tweet,
      })
    }
  });
  
  return posts.map((post) => (
    <div key={post} className="card rounded post-item">
      <div className="post-author">{post.userName}</div>
      <div className="post-text">{post.content}</div>
      <div className="post-date">{post.date}</div>
    </div>
  ));
};

export default PostItem;
