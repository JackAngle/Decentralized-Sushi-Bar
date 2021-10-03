import React from 'react';
import {
  Container, 
  Row, 
  Col,
  Card,
  Button
  } from 'react-bootstrap';
import TradingBox from './components/TradingBox';




const AppTrading = () => {
    return <Container >
        <Container className="d-flex justify-content-center align-self-center"><h1>SUSHIBAR SWAP</h1></Container>
        <TradingBox/>
      </Container>
}


export default AppTrading;
