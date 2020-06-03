import React from 'react';
import axios from 'axios';
import {useRouter} from 'next/router';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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


const Post = () => {
  const classes = useStyles();
  const [post, setPost] = React.useState({title: '', body: ''});
  const router = useRouter();
  const index = router.query.index;

  React.useEffect(() => {
    axios.get(`https://simple-blog-api.crew.red/posts/${index}`)
    .then(response => {
      setPost(response.data);
    });
  }, [index]);

    return(
      <div className={classes.div}>
        <Grid item>
          <Link href="/">Main</Link>
        </Grid>
        <Card className={classes.card}>
        <CardContent>
          <Typography>{post.title}</Typography>
          <Typography>{post.body}</Typography>
        </CardContent>
        <Link href="/">Back to list</Link>
      </Card>
    </div>
    ) 
  }


export default Post;