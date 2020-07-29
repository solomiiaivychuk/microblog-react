import React, { useState, useEffect } from 'react';
import InputForm from './InputForm'
import PostItem from './PostItem'
import { getTweets, postTweet } from '../lib/api'
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'
import { savePosts } from '../lib/hooks';
import AddTweet from '../AddTweet';
import TweetsList from '../TweetsList'

const PostsList = () => {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [posts, setPosts] = useState([]);
  const tweet = []

const addPost = async (post) => {
    setLoad(false);
    if (post.text != "") {
      try {
        tweet = post;
        await postTweet(post);
        setPosts([post, ...posts]);
      }
      catch(error) {
        setError(true);
        setErrorMessage("Error :" + error.message);
      }
     }
     setLoad(true);
  }

  const getPosts = async () => {
    try {
      const response = await getTweets();
      const serverTweets = response.data.tweets;
      setPosts(serverTweets)
    }
      catch(error) {
      setError(true); 
      setErrorMessage("Error : " + error.message);
      console.log(error.message);
    }
    setLoad(true);
  }

  useEffect(() => {
    setInterval(() => {
      getPosts();
    }, 10000);
  }, [])
  
  return ( 
    <AddTweet.Provider value={tweet, addPost}>
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
    </AddTweet.Provider>
  );
}
 
export default PostsList;