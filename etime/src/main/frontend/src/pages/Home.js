// import { useEffect, useState} from "react";
// import axios from "axios";
import '../style/App.css'
import React from "react"
import { Container, Navbar, Nav, Tab, Row, Col, ListGroup, Card, Form, Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Post from "./Post"


function Home() {
    return (
<>
    <BrowserRouter>
        {/* 라우터 경로 설정 */}
        <Container fluid>
            {/* 네비게이션 바 */}
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
            <Routes>
                <Route path="/post" element={<Post />} />
            </Routes>
            <Row className='Main'>
                {/* 사이드 바 */}
                <Col className='Sidebar' xs={2}>
                    <Tab.Container defaultActiveKey="#link1">
                        <Row>
                            <ListGroup variant='flush'>
                                <ListGroup.Item action onClick={null}>Category1</ListGroup.Item>
                                <ListGroup.Item action onClick={null}>Category1</ListGroup.Item>
                                <ListGroup.Item action onClick={null}>Category1</ListGroup.Item>
                            </ListGroup>
                        </Row>
                    </Tab.Container>
                </Col>

                {/* 컨텐츠 */}
                <Col className='Content'>
                    <Row>
                        <Card>
                            <Card.Link href='/post'>
                                <Card.Img variant="top" src='http://via.placeholder.com/320x180' />
                                <Card.Body>
                                    <Card.Title>
                                        Title
                                    </Card.Title>
                                    <Card.Text>
                                        Text
                                    </Card.Text>
                                </Card.Body>
                            </Card.Link>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </Container>
    </BrowserRouter>
</>
    );
}




export default Home;
