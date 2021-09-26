import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

  import HomepageImage from './HomepageImage';
 

const SwitchPages = () =>{
      return <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  };

  export default SwitchPages;

  function Home() {
    return <div className="container-fluid text-center">
        <h2>Home</h2>;
        <HomepageImage />
  
      </div>
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  };

