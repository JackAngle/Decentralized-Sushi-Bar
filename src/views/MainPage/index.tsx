import React from 'react';
import {
  Container, 
  Row, 
  Col,
  Card,
  Button,
  Carousel
  } from 'react-bootstrap';
import HomepageImage from '../../components/HomepageImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUserShield, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player';


const imageCarousel =<Carousel>
<Carousel.Item>
  <img
    className="d-block img-thumbnail rounded"
    src="https://images.unsplash.com/photo-1583623025817-d180a2221d0a"
    alt="First slide"
    width="600px"
    height="600px"

  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block img-thumbnail rounded"
    src="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
    alt="Second slide"
    width="600px"
    height="600px"

  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block img-thumbnail rounded"
    src="https://images.unsplash.com/photo-1553621042-f6e147245754"
    alt="Third slide"
    width="600px"
    height="600px"
  />
</Carousel.Item>
</Carousel>


const welcomeText = <Col md={5} sm={5} className="text-light d-flex justify-content-center align-self-center">
  <Card className="text-light text-left bg-light flex-fill w-100 h-100 d-inline-block card-2 p-2">
  <Card.Body  className="mb">
    <Card.Text className="h1 p-2">Decentralized Sushi Bar</Card.Text>
    <Card.Text className="h2 p-2">
      Manage your sushis with blockchain-powered system.
    </Card.Text>
    
    &nbsp;&nbsp;&nbsp;<Button variant="primary" size="lg">LEARN MORE</Button>
  </Card.Body>
</Card>
 </Col>

const welcomeLine = <>
{welcomeText}
<Col md={7} sm={7} className="d-flex justify-content-start">{imageCarousel}</Col>
</>    


const reason1 = <Card style={{ width: '18rem' }} border="dark" className="text-center bg-dark h-100">

<Card.Body>
<FontAwesomeIcon icon={faShoppingCart} size="5x"/>
  <Card.Text/>
  <Card.Title className="font-weight-bold"><h1>Payment flexibility</h1></Card.Title>
  <Card.Text className="h5">
    You can pay for sushis by various type of cryptocurrencies. We are not picky.
  </Card.Text>
</Card.Body>
</Card>

const reason2 = <Card style={{ width: '18rem' }} border="dark" className="text-center bg-dark h-100">

<Card.Body>
<FontAwesomeIcon icon={faUserShield} size="5x"/>
  <Card.Text />
  <Card.Title className="font-weight-bold" ><h1>No one can take what yours</h1></Card.Title>
  <Card.Text className="h5">
  Only the person whose wallet possesses the NFT will receive the Sushi.
  </Card.Text>
</Card.Body>
</Card>

const reason3 = <Card style={{ width: '18rem' }} border="dark" className="text-center bg-dark h-100">

<Card.Body>
<FontAwesomeIcon icon={faThumbsUp} size="5x"/>
  <Card.Text/>
  <Card.Title className="font-weight-bold"><h1>Build trust</h1></Card.Title>
  <Card.Text className="h5">
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


const youtubePlayer = 
  <Container className='player-wrapper bg-dark   m-0' fluid>
  <ReactPlayer 
  className="react-player  "
  url='https://www.youtube.com/watch?v=NTYbVnENeVo' 
  muted={false}
  width='75%'
  height='75%'
  // light="https://images7.alphacoders.com/909/909448.png"
  // light="https://my.level10.gr/wp-content/uploads/sites/5/2019/10/video-placeholder.jpg"
  controls={true}
/></Container>

const MainPage = () => {
    return <Container fluid className="m-0 p-0 ">
    
    <Row className="m-0 p-0 d-flex justify-content-center text-light ">
    <Container className="m-0 p-0 text-light d-flex justify-content-center" >
      {welcomeLine}
      </Container>
    </Row>
    
    <Container className="m-0 p-5 text-light bg-dark d-flex justify-content-center" fluid>
      {reasonsColumn}
    </Container>

    <Container className="m-0 p-0 d-flex flex-row justify-content-center text-light text-center bg-light" fluid>
    {youtubePlayer}
    </Container>
  </Container>
}


export default MainPage;
