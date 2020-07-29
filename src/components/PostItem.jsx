import React, { useContext } from "react";
import AddTweet from '../AddTweet'
import TweetsList from '../TweetsList'


const context = TweetsList;

const PostItem = (props) => {
const context = useContext(AddTweet);
console.log(context.post);

  return (
        <div className="card shadow rounded post-item">
          <div className="post-author">{props.post.userName}</div>
          <div className="post-text">{props.post.content}</div>
          <div className="post-date">{props.post.date}</div>
        </div>
   );
}

export default PostItem;
