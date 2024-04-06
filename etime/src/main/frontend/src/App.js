// import { useEffect, useState} from "react";
// import axios from "axios";
import './App.css'
import React from "react"
import { Navbar, Nav, Container, Tab, Row, Col, ListGroup, Card, Placeholder } from 'react-bootstrap';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Home"

function App() {


    return (
<>
    {/* 라우터 경로 설정 */}
    <BrowserRouter>
        <Routes>
            <Route path={"/pages/home"} element={<Home />} />
        </Routes>
    </BrowserRouter>


    <Container fluid>
        {/* 네비게이션 바 */}
        <Row>
            <Navbar>
                <Navbar.Brand href="#home">React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Row className='w-100'>
                        <Col className='d-flex justify-content-start'>
                            <Nav.Link href="#link">Link1</Nav.Link>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <Nav.Link href="#link">Link2</Nav.Link>
                        </Col>
                        <Col className='d-flex justify-content-end'>
                            <Nav.Link href="#link">Link3</Nav.Link>
                        </Col>
                    </Row>
                </Navbar.Collapse>
            </Navbar>
        </Row>
        {/* 사이드 바 */}
        <Row>
            <Col xs={2}>
                <Tab.Container defaultActiveKey="#link1">
                    <Row fluid>
                        <ListGroup variant='flush'>
                            <ListGroup.Item action onClick={null}>
                                Category1
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={null}>
                                Category2
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={null}>
                                Category3
                            </ListGroup.Item>
                        </ListGroup>
                    </Row>
                </Tab.Container>
            </Col>
            
            {/* 메인 콘텐츠 */}
            <Col className='Content'>
                <Row>
                    <Card style={{ width: '24rem'}}>
                        <Card.Img variant="top" src="http://via.placeholder.com/320x180" />
                        <Card.Body>
                            <Card.Title>
                                CardTitle
                            </Card.Title>
                            <Card.Text>
                                CardText
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '24rem'}}>
                        <Card.Img variant="top" src="http://via.placeholder.com/320x180" />
                        <Card.Body>
                            <Card.Title>
                                CardTitle
                            </Card.Title>
                            <Card.Text>
                                CardText
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '24rem'}}>
                        <Card.Img variant="top" src="http://via.placeholder.com/320x180" />
                        <Card.Body>
                            <Card.Title>
                                CardTitle
                            </Card.Title>
                            <Card.Text>
                                CardText
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '24rem'}}>
                        <Card.Img variant="top" src="http://via.placeholder.com/320x180" />
                        <Card.Body>
                            <Card.Title>
                                CardTitle
                            </Card.Title>
                            <Card.Text>
                                CardText
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '24rem'}}>
                        <Card.Img variant="top" src="http://via.placeholder.com/320x180" />
                        <Card.Body>
                            <Card.Title>
                                CardTitle
                            </Card.Title>
                            <Card.Text>
                                CardText
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '24rem'}}>
                        <Card.Img variant="top" src="http://via.placeholder.com/320x180" />
                        <Card.Body>
                            <Card.Title>
                                CardTitle
                            </Card.Title>
                            <Card.Text>
                                CardText
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Col>
        </Row>
    </Container>
</>
    );
}

export default App;
