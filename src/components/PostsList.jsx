import React, { useState, useEffect, useContext } from "react";
import InputForm from "./InputForm";
import PostItem from "./PostItem";
import { getTweets, postTweet } from "../lib/api";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import TweetsContext from "../TweetsContext";
import WindowDisabled from "./WindowDisabled"
import UserNameContext from '../UserNameContext'
import * as firebase from 'firebase'

const PostsList = () => {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [posts, setPosts] = useState([]);

  const userName = useContext(UserNameContext);

  const tweetsRef = firebase.database().ref('tweets');

  const addPost = async (post) => {
    setLoad(false);
    if (post.text != "") {
      try {
        await tweetsRef.push(post);
      } catch (error) {
        setError(true);
        setErrorMessage("Unable to post tweet : " + error.message);
      }
    }
    setLoad(true);
  };

  const getPosts = async () => {
    try {
      tweetsRef.on('value', async (snapshot) => {
        let tweetsFromFirestore = await snapshot.val();
        let tweetsArr = [];
        for (let tweet in tweetsFromFirestore) {
          tweetsArr.push({
            content: tweetsFromFirestore[tweet].content,
            userName: tweetsFromFirestore[tweet].userName,
            date: tweetsFromFirestore[tweet].date,
            id: tweet,
          })
        }
        setPosts(tweetsArr);
      })
      }
    catch(error) {
      setError(true);
      setErrorMessage("Unable to get tweets : " + error.message)
    }
      setLoad(true);
  }

  useEffect( () => {
    getPosts();
  }, [])

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
