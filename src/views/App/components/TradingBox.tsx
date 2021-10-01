import React from 'react';
import {
    Container, 
    Row, 
    Col,
    Card,
    Dropdown,
    InputGroup,
    DropdownButton,
    FormControl
    } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';


const cardBox = <Container>
    <Row>
        
        <Col></Col>

        <Col>
    <Card  style={{ border: '5px solid #ff66b2' }} className="bg-dark text-white m-2 p-2" bg="dark">
    <Card.Body>
        
  
    <Container>
    <InputGroup className="mb-3">
        <FormControl size="sm" aria-label="Text input with dropdown button" />
        <DropdownButton
        variant="outline-secondary"
        title="BUSD"
        id="input-group-dropdown-1"
        align="end"
        >
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#"><Icon bordered name='exchange'/></Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
    </InputGroup>
    </Container>


    <Container className="d-flex justify-content-center pt-2 pb-4"><Icon bordered name='exchange'/></Container>

  
    <Container className="align-self-end">
    <InputGroup className="mb-3">
        <FormControl size="sm" aria-label="Text input with dropdown button" />
        <DropdownButton
        variant="outline-secondary"
        title="ETH"
        id="input-group-dropdown-2"
        align="end"
        >
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
    </InputGroup>
    </Container>
 
    </Card.Body>
    </Card>
    </Col>

    <Col></Col>

    </Row>
</Container>

const TradingBox = () => {
    return <>{cardBox}</>
}


export default TradingBox;