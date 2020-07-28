import React, { useState, useEffect } from 'react';
import InputForm from './InputForm'
import PostItem from './PostItem'
import { getTweets, postTweet } from '../lib/api'
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'
import { savePosts } from '../lib/hooks';

const PostsList = (props) => {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [posts, setPosts] = useState([]);

const addPost = async (post) => {
    setLoad(false);
    if (post.text != "") {
      try {
        await postTweet(post);
        setPosts([post, ...posts]);
      }
      catch(error) {
        setError(true);
        setErrorMessage("Something went wrong. Unable to post tweet.");
      }
     }
    getPosts();
  }

  const getPosts = async () => {
    try {
      const response = await getTweets();
      const serverTweets = response.data.tweets;
      setPosts(serverTweets)
    }
      catch(error) {
      setError(true); 
      setErrorMessage("No tweets to present.")
    }
    setLoad(true);
  }

  useEffect(() => {
    setInterval(() => {
      getPosts();
    }, 10000);
  }, [])
  
  return ( 
    <div>
      <InputForm onSubmit={(post) => addPost(post)}></InputForm>
      {!load && <Loader></Loader>}
      {error && <ErrorMessage errorMessage={errorMessage}></ErrorMessage>}
      {posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          post={post}
        >
        </PostItem>
      ))
      }
    </div>
  );
}
 
export default PostsList;