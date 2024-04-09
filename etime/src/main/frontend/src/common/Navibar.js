// Navbar.js
// 상단 네비게이션 바
import React from 'react';
import { Col, Row, Navbar, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

function Navibar() {

    const navigate = useNavigate();

  return (
    <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Row className='w-100'>
                <Col className='d-flex justify-content-start'>
                    <Navbar.Brand href="/">
                        <h3>React</h3>
                    </Navbar.Brand>
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
                    <Button variant="light" type="submit" onClick={() => {
                        navigate('/pages/mypage')}}>
                        Mypage
                    </Button>
                </Col>
            </Row>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navibar;
