import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Post from "./Post";
import Posts from "./Posts";
import CreatePost from "./CreatePost";

const AppRouter = () => {
  return (
    <Router>
    <Switch>
      <Route path ='/' exact component={Posts}/>
      <Route path ='/post/:id' component={Post}/>
      <Route path ='/create' component={CreatePost}/>
    </Switch>
    </Router>
  )
}

export default AppRouter;