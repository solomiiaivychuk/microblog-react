import React from 'react';
import InputForm from './InputForm'
import PostItem from './PostItem'

class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts : [],
     }
  }

  addPost(post) {
    if (post.text != "") {
      this.setState({
        posts : [post, ...this.state.posts]
      })
    }
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