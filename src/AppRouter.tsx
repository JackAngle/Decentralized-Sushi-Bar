import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import AppTrading from './views/App';
import MainPage from './views/MainPage/index';
import GlobalFooter from './components/GlobalFooter';
 

const AppRouter = () =>{
      return <Switch>
      <Route path="/whitepaper">
        <Whitepaper />
        <GlobalFooter/>
      </Route>
      <Route path="/app">
        <App />
        <GlobalFooter/>
      </Route>
      <Route path="/">
        <Home />
        <GlobalFooter/>
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

