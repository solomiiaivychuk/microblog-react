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
      
      <div className="post-item">
        <Card className="{classes.root}">
      <CardContent>
        <Typography className="" color="textSecondary" gutterBottom>
        {this.props.post.author}
        </Typography>
        <Typography variant="h5" component="h2" nowrap="false">
        {this.props.post.text}
        </Typography>
        <Typography className="{classes.pos}" color="textSecondary">
        {this.props.post.date}
        </Typography>
        <Typography variant="body2" component="p">
        </Typography>
      </CardContent>
    </Card>
    </div>
     );
  }
}
 
export default PostItem;