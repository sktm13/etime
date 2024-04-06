// Contents.js
import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';

function Contents() {
  return (
    <Col className='Content'>
      <Row>
        <Card>
          <Card.Link href='/post'>
            <Card.Img variant="top" src='http://via.placeholder.com/320x180' />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card.Link>
        </Card>
        <Card>
          <Card.Link href='/post'>
            <Card.Img variant="top" src='http://via.placeholder.com/320x180' />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card.Link>
        </Card>
        <Card>
          <Card.Link href='/post'>
            <Card.Img variant="top" src='http://via.placeholder.com/320x180' />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card.Link>
        </Card>
        <Card>
          <Card.Link href='/post'>
            <Card.Img variant="top" src='http://via.placeholder.com/320x180' />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card.Link>
        </Card>
        <Card>
          <Card.Link href='/post'>
            <Card.Img variant="top" src='http://via.placeholder.com/320x180' />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card.Link>
        </Card>
        <Card>
          <Card.Link href='/post'>
            <Card.Img variant="top" src='http://via.placeholder.com/320x180' />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card.Link>
        </Card>
      </Row>
    </Col>
  );
}

export default Contents;
