import React, { useState, useEffect } from 'react';
import InputForm from './InputForm'
import PostItem from './PostItem'
import { getTweets, postTweet } from '../lib/api'
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'

class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts : [],
      loaded : false,
      errorMessage : '',
      error: false,
     }
  }


  async addPost(post) {
    this.setState((state) => {return {loaded : false}})
    this.setState((state) => state.posts = [])
    if (post.text != "") {
      try {
        await postTweet(post);
      }
      catch(error) {
        this.setState(() => {return {
          error : true, 
          errorMessage : "Something went wrong. Unable to post tweet."}})
      }
     }
    await this.getPosts();
  }

  async getPosts() {
    try {
      const response = await getTweets();
      const serverTweets = response.data.tweets;
      for (let post of serverTweets) {
        this.setState((state) => {
          return { 
          posts : [...state.posts, post]
        }
        })
      }
    }
    catch(error) {
      this.setState(() => {return {
        error: true, 
        errorMessage : "No tweets to present. Check the address."}})
      }
    this.setState(() => {return {loaded : true}})
  }

  async componentDidMount() {
    window.addEventListener('load', this.getPosts());
  }
  
  render() { 
    return ( 
      <div>
        <InputForm onSubmit={(post) => this.addPost(post)}></InputForm>
        {!this.state.loaded && <Loader></Loader>}
        {this.state.error && <ErrorMessage errorMessage={this.state.errorMessage}></ErrorMessage>}
        {this.state.posts.map((post) => (
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
}
 
export default PostsList;