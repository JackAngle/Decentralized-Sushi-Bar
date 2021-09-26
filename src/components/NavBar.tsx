import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';

  import SwitchPages from './SwitchPages';


  const NavBar = () =>{
      return <Router>
      <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item m-2 font-weight-bold">
                <Link to="/" >Home </Link>
              </li>
              <li className="nav-item m-2 font-weight-bold">
                <Link to="/about"> About </Link>
              </li>
              <li className="nav-item m-2 font-weight-bold">
                <Link to="/users"> Users </Link>
              </li>
            </ul>
          </div>
        </nav>

        <SwitchPages/>

      </div>
    </Router>
  };

  

  export default NavBar;


        