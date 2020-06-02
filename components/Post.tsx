import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CatImg from '../images/cat.jpg';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  nav: {
    marginTop: '0',
    color: '#314f1a',
    fontWeight: 'bold',
    fontSize: '20px',
    paddingRight: '30px',
  },
  div: {
    marginLeft: '5%',
    marginTop: '3%',
  },
  card: {
    maxWidth: 300,
  },
  media: {
    width: '100%',
    height: 'auto',
    paddingTop: '5%',
  }
}));


const Post = ({match}) => {
  const classes = useStyles();
  const [post, setPost] = React.useState(null);


  React.useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts/${match.params.id}`)
    .then(response => {
      setPost(response.data);
    });
  }, [match.params.id]);

    return(
      <div className={classes.div}>
        <Grid item>
          <Tooltip placement="top-start">
            <Button className={classes.nav} component={Link} to={'/'}>Main</Button>
          </Tooltip>
        </Grid>
        <Card className={classes.card}>
        <CardHeader action={<IconButton aria-label="Settings"></IconButton>} title="Cats Facts Base" subheader="a new cat fact every day"/>
        <CardContent><Typography>{post.body}</Typography></CardContent>
        <Button size="small" component={Link} to={'/posts/'}>back to list</Button>
      </Card>
    </div>
    ) 
  }


export default Post;