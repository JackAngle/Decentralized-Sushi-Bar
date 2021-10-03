import React from 'react';
import {
  Container, 
  Row, 
  Col,
  Card,
  Button
  } from 'react-bootstrap';
import HomepageImage from '../../components/HomepageImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUserShield, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player';


const welcomeText = <Col md='auto' sm='auto' className="text-light d-flex justify-content-center align-self-center">
  <Card className="text-light text-left bg-light flex-fill w-100 h-100 d-inline-block card-2">
  <Card.Body  className="mb">
    <Card.Title as="h1">Decentralized Sushi Bar</Card.Title>
    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    <Card.Text>
      Manage your sushis with blockchain-powered system.
    </Card.Text>
    
    <Button variant="primary">LEARN MORE</Button>
  </Card.Body>
</Card>
 </Col>

const welcomeLine = <>
{welcomeText}
<Col md='auto' sm={8} className="text-center"><HomepageImage /></Col>
</>    


const reason1 = <Card style={{ width: '18rem' }} border="dark" className="text-center bg-dark h-100">

<Card.Body>
<FontAwesomeIcon icon={faShoppingCart} size="5x"/>
  <Card.Text/>
  <Card.Title className="font-weight-bold">Payment flexibility</Card.Title>
  <Card.Text>
    You can pay for sushis by various type of cryptocurrencies. We are not picky.
  </Card.Text>
</Card.Body>
</Card>

const reason2 = <Card style={{ width: '18rem' }} border="dark" className="text-center bg-dark h-100">

<Card.Body>
<FontAwesomeIcon icon={faUserShield} size="5x"/>
  <Card.Text/>
  <Card.Title className="font-weight-bold">No one can take what yours</Card.Title>
  <Card.Text>
  Only the person whose wallet possesses the NFT will receive the Sushi.
  </Card.Text>
</Card.Body>
</Card>

const reason3 = <Card style={{ width: '18rem' }} border="dark" className="text-center bg-dark h-100">

<Card.Body>
<FontAwesomeIcon icon={faThumbsUp} size="5x"/>
  <Card.Text/>
  <Card.Title className="font-weight-bold">Build customers's trust</Card.Title>
  <Card.Text>
  Through blockchain technology, customers can know everything about their purchased product. 
  This is the most important element in building trust.
  </Card.Text>
</Card.Body>
</Card>


const reasonsColumn = <Row>
  <Col  className="text-center  align-items-stretch ">
    <Container className="h-100" fluid>
    {reason1}
    </Container>
  </Col>
  <Col  className="text-center  align-self-stretch " >
  <Container className="h-100" fluid>
    {reason2}
    </Container>
  </Col>
  <Col   className="text-center align-self-stretch ">
  <Container className="h-100" fluid>
    {reason3}
    </Container>
  </Col>
</Row>  


const youtubePlayer = <ReactPlayer url='https://www.youtube.com/watch?v=KRCJsDjAEqQ' 
  muted={false}
  width="1280px"
  height="720px"
  // light="https://images7.alphacoders.com/909/909448.png"
  light="https://my.level10.gr/wp-content/uploads/sites/5/2019/10/video-placeholder.jpg"
  controls={true}
/>

const MainPage = () => {
    return <Container fluid className="m-0 p-0">
    <Container className="m-0 p-0 d-flex justify-content-center text-light" fluid>
      {welcomeLine}
    </Container>
    <Container className="m-0 p-0 text-light bg-dark d-flex  justify-content-center" fluid>
      {reasonsColumn}
    </Container>
    <Container className="m-0 p-0 d-flex justify-content-center text-light bg-dark" fluid>
    {youtubePlayer}
    </Container>
  </Container>
}


export default MainPage;
