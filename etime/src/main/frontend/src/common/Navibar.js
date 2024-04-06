// Navbar.js
import React from 'react';
import { Col, Row, Navbar, Nav, Form, Button } from 'react-bootstrap';

function Navibar() {
  return (
    <Navbar>
        <Navbar.Brand href="#link">
            <h3>React</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Row className='w-100'>
                <Col className='d-flex justify-content-start'>
                    <Nav.Link href="#link">Link1</Nav.Link>
                </Col>
                <Col className='d-flex justify-content-center'>
                <Form.Group className="mb-2" controlId="Form.SearchInput">
                    <Form.Control type="text" placeholder="Search" />
                </Form.Group>
                <Button variant="light" type="submit">
                    🔍
                </Button>
                </Col>
                <Col className='d-flex justify-content-end'>
                    <Nav.Link href="#link">Link3</Nav.Link>
                </Col>
            </Row>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navibar;
