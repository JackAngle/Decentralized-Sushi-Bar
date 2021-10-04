import React, { useState, useEffect } from 'react';
import {
  Container, 
  Col,
  Row,
  Image
  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons' 


interface ColoredLineProp {
  color?: string;
}

const  ColoredLine = ({ color }: ColoredLineProp) => {
  return <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 10
      }}
  />;
}

const openInNewTab = (url: string) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

  const GlobalFooter = () =>{
    return <Container className="d-flex  flex-column justify-content-center"  fluid>
      <ColoredLine color="#dd40d0" />
      <Row>
    <Container className="d-flex  flex-column justify-content-center bg-dark m-2 p-3" fluid>
      <Row>
        <Col>
        <Container d-flex flex-row justify-content-center>
          <Image 
          src="https://lh3.googleusercontent.com/0dqXHCVkacTtgfBwWlVP55_IN0h7bj2rk12BhergGjbSCxgsMGm2nu1OcWQ8mwrEzxcrqlrratOZBq_PWifFec3VzzE3xRIW-tw7cw=s0" 
          rounded thumbnail
          width="35%"
          height="35%" 
           />
           <h2>  HermitDev</h2>
           <h1>ABOUT US</h1>
          <h3>
            We are currently have only one member. Which is me,<br/>
            a blockchain enthusiast.<br/>
             You gotta find out about NFT.
            They are very cool stuff.<br/>
            See the dragon? It's Whelps NFT.
            </h3>
        </Container>
        </Col>
        
        <Col>
        <Image 
          src="whelps.png" 
          rounded thumbnail
          width="35%"
          height="35%" 
           />
           <h2>Still HermitDev <br/> but with a cooler avatar</h2>
        </Col>

        <Col className="d-flex  flex-column justify-content-center p-2">
        <Container className="m-0 p-2">
          <h2>
            <a href="#" onClick={() => openInNewTab("https://twitter.com/ThinhLe156")} ><FontAwesomeIcon  icon={faTwitter} /> Twitter</a>
            </h2>
        </Container>
        <Container className="m-0 p-2">
          <h2>
            <a href="#" onClick={() => openInNewTab("https://github.com/JackAngle")} ><FontAwesomeIcon  icon={faGithub} /> Github</a>
            </h2>
        </Container>
        <Container className="m-0 p-2">
        <h2>
            <a><FontAwesomeIcon  icon={faEnvelope} spin/> lehuythinh156@gmail.com</a>
            </h2>
        </Container>
        </Col>
      </Row>
    </Container>
    </Row> 
    <ColoredLine color="#dd40d0" />
    </Container>
  }
  export default GlobalFooter;


        