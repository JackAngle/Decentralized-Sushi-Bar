import React, { FC } from 'react';
import {
    Container, 
    Row, 
    Col,
    Image
    } from 'react-bootstrap';


interface CellProps {
  img?: string;
  description?: string;
}

const SushiTableCell: FC<CellProps> = ({ img, description }) => {
  return (
    <Container className="justify-content-center sushi-table h-100 w-100">
      <Row className="">
      <Col>
        <Image 
        src={img} 
        rounded thumbnail
        // width="250px"
        // height="250px"
        />
      </Col>
      <Col>
        <h1 >{description}</h1> 
        </Col>
      </Row>
    </Container>
  );
};

export default SushiTableCell;