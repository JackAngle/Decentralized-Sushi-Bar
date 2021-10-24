import React from 'react';
import {
  Container, 
  Row, 
  Col,
  Card,
  Button,
  Tabs,
  Nav,
  Tab
  } from 'react-bootstrap';
import TradingBox from './components/TradingBox';
import SushiGrid from './components/SushiGrid';
import SideBar from './components/SideBar';




const AppTrading = () => {
    return <Container className="m-0 p-8" fluid>
      <Tabs variant="pills" defaultActiveKey="market" id="uncontrolled-tab-example" className="bg-dark" >
        
      <Tab eventKey="market" title="MARKET" tabClassName="h5 font-weight-bold ">
        <Container fluid>
        <Row>
          <SideBar content={<SushiGrid/>}/>
          
        </Row>
        </Container>
      </Tab>
        <Tab eventKey="trade" title="TRADE" tabClassName="h5 font-weight-bold">
          <Container className="d-flex justify-content-center align-self-center"><h1>SUSHIBAR SWAP</h1></Container>
          <TradingBox/>
        </Tab> 
      </Tabs>
        
      </Container>
}


export default AppTrading;
