import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <div className="card shadow rounded post-item">
      <div className="post-author">
        {this.props.post.author}
      </div>
      <div className="post-text">
        {this.props.post.text}
      </div>
      <div className="post-date">
        {this.props.post.date}
      </div>
    </div>
     );
  }
}
 
export default PostItem;
