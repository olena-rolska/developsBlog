import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Post from "./Post";
import Posts from "./Posts";

const AppRouter = () => {
  return (
    <Router>
    <Switch>
      <Route path='/post/:id' component={Post}/>
    </Switch>
    </Router>
  )
}

export default AppRouter;