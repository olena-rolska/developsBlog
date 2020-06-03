import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  main: {
    width: '100%',
    height: '100hv',
    padding: 0,
  },
  fab: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    textDecoration: "none",
    color: 'black',
  },
  link: {
    textDecoration: "none",
    color: 'black',
  },
  cards: {
    width : '80%',
    display: 'flex',
  },
  card: {
    maxWidth: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '4%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  action: {
      display: 'flex',
      justifyContent: "space-around",
  },
  button: {
    margin: theme.spacing(5),
    fontSize: '1em',
    background: 'white',
  },
  button_s: {
    margin: theme.spacing(1),
    float: 'right',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  margin: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  paper: {
    position: 'absolute',
    top: "35%",
    left: "35%",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width : '100%',
  },
  content: {
    height: 150,
    textAlign: 'center',
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: '12em',
  }
}));


const createPost = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({});

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };


  const postCreated = () => {
    setTimeout(() => Router.push('/'), 1500)
    alert("Post created")
  }

  const createMessage = () => {
    axios.post('https://simple-blog-api.crew.red/posts',{
    title: values.title,
    body: values.body,
  },
  )
  .then(response =>
    setValues(''),
    postCreated()
  )}

  return (
    <div className={classes.main}>
      <Button variant="contained" color="primary" className={classes.button} onClick={createMessage}>
        <Link href={`/`} as={`/`}>←</Link>
        </Button>
      <div className={classes.paper}>
        <Typography variant="h6" id="modal-title"> Create a post</Typography>
        <TextField
          label="Title"
          multiline
          rowsMax="4"
          value={values.title}
          onChange={handleChange('title')}
          className={classes.textField}
          margin="normal"
          autoFocus
          required
          />
          <TextField
          label="Text"
          multiline
          rowsMax="4"
          value={values.body}
          onChange={handleChange('body')}
          className={classes.textField}
          margin="normal"
          required
          />
        <Button variant="contained" color="primary" className={classes.button_s} onClick={createMessage}>
          ➤
        </Button>
      </div>
  </div>
  );
}

export default createPost;