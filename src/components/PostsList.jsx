import React, { useState, useEffect } from 'react';
import InputForm from './InputForm'
import PostItem from './PostItem'

class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts : [],
     }
  }

  saveState(key, defValue) {
    const [state, setState] = React.useState(localStorage.getItem(key) || defValue);
    useEffect(() => {localStorage(key, state)}, [key,state]);
    return [state, setState]
  }

  addPost(post) {
    if (post.text != "") {
      this.setState({
        posts : [post, ...this.state.posts]
      })
    }
    localStorage.setItem(post.id, JSON.stringify(post));
  }

  componentDidMount() {
    window.addEventListener('load', ()=> {
      let unsorted_keys = Object.keys(localStorage);
      let keys = unsorted_keys.sort((a, b) => b - a);
      for (let key of keys) {
        let post = JSON.parse(localStorage.getItem(key));
        this.setState((state) => {
          return { 
          posts : [...state.posts, post]
        }
        })
      }
    })
  }
  
  render() { 
    return ( 
      <div>
        <InputForm onSubmit={(post) => this.addPost(post)}></InputForm>
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