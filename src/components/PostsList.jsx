import React, { useState, useEffect, useContext } from "react";
import InputForm from "./InputForm";
import PostItem from "./PostItem";
import { getTweets, postTweet } from "../lib/api";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import TweetsContext from "../TweetsContext";
import WindowDisabled from "./WindowDisabled"
import * as firebase from 'firebase'

const PostsList = () => {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  //const [posts, setPosts] = useState([]);
  let posts = [];

  const tweetsRef = firebase.database().ref('tweets');

  const addPost = async (post) => {
    setLoad(false);
    if (post.text != "") {
      try {
        await tweetsRef.push(post);
        //setPosts([post, ...posts]);
      } catch (error) {
        setError(true);
        setErrorMessage("Unable to post tweet : " + error.message);
      }
    }
    setLoad(true);
  };

  const getPosts = async () => {
      tweetsRef.on('value', (snapshot) => {
        return snapshot.val();
      })
    setLoad(true);
  };


  return (
    <TweetsContext.Provider value={{ posts, addPost }}>
      <InputForm onSubmit={(post) => addPost(post)}></InputForm>
      {!load && <div> <WindowDisabled /> <Loader /> </div>}
      {error && <ErrorMessage errorMessage={errorMessage}></ErrorMessage>}
      <PostItem />
    </TweetsContext.Provider>
  );
};

export default PostsList;
