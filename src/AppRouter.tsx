import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import AppTrading from './views/App';
import MainPage from './views/MainPage/index';
 

const AppRouter = () =>{
      return <Switch>
      <Route path="/whitepaper">
        <Whitepaper />
      </Route>
      <Route path="/app">
        <App />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  };

  export default AppRouter;

  /* Redirect your path here */
  function Home() {
    return <>
    <MainPage/>
    </>
  }
  
  function App() {
    return <>
    <AppTrading/>
    </>
  }
  
  function Whitepaper() {
    return <h2>WhitePaper</h2>;
  };

