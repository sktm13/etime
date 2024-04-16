// Navbar.js
// 상단 네비게이션 바
import React from 'react';
import { Col, Row, Navbar, Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

function Navibar() {

    const navigate = useNavigate();

  return (
    <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Row className='w-100'>
                <Col className='d-flex justify-content-start d-flex align-items-center'>
                    <Navbar.Brand href="/">
                        <h3>React</h3>
                    </Navbar.Brand>
                </Col>
                <Col className='d-flex justify-content-center'>
                <Form.Group className="mb-2 d-flex align-items-center" controlId="Form.SearchInput">
                    <Form.Control type="text" placeholder="Search" />
                </Form.Group>
                <Button variant="light" type="submit">
                    🔍
                </Button>
                </Col>
                <Col className='d-flex justify-content-end align-items-center'>
                    <DropdownButton variant="light" title="More">
                        <Dropdown.Item onClick={() => {navigate('/pages/login')}}>Login</Dropdown.Item>
                        <Dropdown.Item onClick={() => {navigate('/pages/mypage')}}>Mypage</Dropdown.Item>
                        <Dropdown.Item onClick={() => {navigate('/pages/donate')}}>Donate</Dropdown.Item>
                        <Dropdown.Item onClick={() => {navigate('/pages/payment')}}>Payment</Dropdown.Item>
                        <Dropdown.Item onClick={() => {navigate('/pages/createpost')}}>createPost</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navibar;
