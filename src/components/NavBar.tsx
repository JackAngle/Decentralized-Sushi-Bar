import React, { useState, useEffect } from 'react';
import {
  Container, 
  Navbar, 
  NavDropdown, 
  Nav,
  Image,
  Row,
  } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';

  import AppRouter from '../AppRouter';


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

  <Navbar.Text className="navbar-brand text-light m-0 p-2 bg-primary rounded">      
          Connect Wallet
        </Navbar.Text>
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
        <Navbar.Text className="navbar-brand text-light m-0 p-2 bg-primary">      
          Connect Wallet
        </Navbar.Text>
    </Nav>

    </Container>
</Navbar>
<AppRouter/>
</Container>
</Router>

//   const myNavBar =  <Router>
//   <Container fluid>
//     <nav className="navbar navbar-expand-lg navbar-light bg-dark">
//     <div className="container-fluid d-flex justify-content-between m-1">
//       <div>
//       <a className="navbar-brand text-light p-1" href="#">
//         <img src="whelps.png" width="40" height="40" className="d-inline-block align-center rounded" alt=""/>
//         &nbsp;Thinh Le
//       </a>
//       </div>
//       <div>
//         <ul className="navbar-nav navbar-center me-auto mb-2 mb-lg-0 d-flex justify-content-between">
//           <li className="nav-item p-2 font-weight-bold">
//             <Link to="/" style={{ textDecoration: 'none', color: 'white' }} >Home </Link>
//           </li>
//           <li className="nav-item p-2 font-weight-bold">
//             <Link to="/app" style={{ textDecoration: 'none', color: 'white' }}> App </Link>
//           </li>
//           <li className="nav-item p-2 font-weight-bold">
//             <Link to="/whitepaper" style={{ textDecoration: 'none', color: 'white' }}> Whitepaper </Link>
//           </li>
//         </ul>
//         </div>
//         <div>
//         <a className="navbar-brand text-light m-0 p-2 bg-primary" href="#">      
//           Connect Wallet
//         </a>
//         </div>      
//       </div>
//     </nav>
//     <AppRouter/>
//     </Container>
// </Router>

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


        