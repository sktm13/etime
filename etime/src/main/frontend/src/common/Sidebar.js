// Sidebar.js
import React from 'react';
import { Col, Row, Tab, ListGroup } from 'react-bootstrap';

function Sidebar() {
  return (
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
  );
}

export default Sidebar;
