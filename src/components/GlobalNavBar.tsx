import React, { useState, useEffect } from 'react';
import {
  Container, 
  Navbar, 
  Nav,
  Image,
  Row,
  Button,
  ToastContainer,
  Toast
  } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';

  import AppRouter from '../AppRouter';
  import ConnectWalletButton from './ConnectWalletButton';




  const mobileNavBar = <Router>
  <Container fluid className="m-0 p-0">
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container fluid>
  <Navbar.Brand href="#home" >
      <Image src="whelps.png" width="40" height="40" rounded/>
      <Navbar.Text className="m-2 text-info">
        DSB
      </Navbar.Text>
    </Navbar.Brand>

  {/* <Navbar.Text className="navbar-brand text-light m-0 p-2 bg-primary rounded">      
          Connect Wallet
        </Navbar.Text> */}
  <Nav><ConnectWalletButton/></Nav>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="m-0 p-0">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/app">App</Nav.Link>
      <Nav.Link href="/whitepaper">Whitepaper</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<AppRouter/>
</Container>
</Router>




const webNavBar = <Router>
<Container fluid className="m-0 p-0">
<Navbar bg="dark" variant="dark">
    <Container fluid>
    {/* LOGO */}
    <Navbar.Brand href="#home" >
      <Image src="whelps.png" width="40" height="40" rounded/>
      <Navbar.Text className="m-2 text-info">
        DeSuBa
      </Navbar.Text>
    </Navbar.Brand>
    {/* NavBar items */}
    <Nav className="mc-auto justify-content-around">
      <Navbar.Text className="m-2 p-2">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }} >Home </Link>
      </Navbar.Text>
      <Navbar.Text className="m-2 p-2">
        <Link to="/app" style={{ textDecoration: 'none', color: 'white' }} >App </Link>
      </Navbar.Text>
      <Navbar.Text className="m-2 p-2">
        <Link to="/whitepaper" style={{ textDecoration: 'none', color: 'white' }} >Whitepaper </Link>
      </Navbar.Text>
    </Nav>
    {/* Wallet */}
    <Nav>
        {/* <Navbar.Text className="navbar-brand text-light m-0 p-2 bg-primary">      
          Connect Wallet
        </Navbar.Text> */}
        <ConnectWalletButton/>
    </Nav>

    </Container>
</Navbar>
<AppRouter/>
</Container>
</Router>


  const GlobalNavBar = () =>{
    // Detect window size change
    const [width, setWidth] = useState<number>(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    let isMobile: boolean = (width <= 768);

    // Render based on window size
    if (isMobile) {
      return mobileNavBar;
    }else {
      return webNavBar;
    }

     

  
  };

  export default GlobalNavBar;


        