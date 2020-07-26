import React from 'react'
import InputForm from './InputForm';
import PostsList from './PostsList';


class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      name: "",
     }
  }
  render() { 
    return ( 
      <div className="">
        <PostsList></PostsList>
      </div>
    );
  }
}
 
export default Body;