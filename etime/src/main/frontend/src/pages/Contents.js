// Contents.js
import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const title = "Title";
const text = "Text";
const link = "#";
const img = "http://via.placeholder.com/320x180";


function Contents() {
    const navigate = useNavigate();

    return (
        <Col className="Content">
            <Row>
                <Card>
                    <Card.Link href={link}
                        onClick={() => {navigate('/pages/Post');}}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{text}</Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
                <Card>
                    <Card.Link href={link}
                        onClick={() => {navigate('/pages/Post');}}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{text}</Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
                <Card>
                    <Card.Link href={link}
                        onClick={() => {navigate('/pages/Post');}}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{text}</Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
                <Card>
                    <Card.Link href={link}
                        onClick={() => {navigate('/pages/Post');}}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{text}</Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
                <Card>
                    <Card.Link href={link}
                        onClick={() => {navigate('/pages/Post');}}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{text}</Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
                <Card>
                    <Card.Link href={link}
                        onClick={() => {navigate('/pages/Post');}}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{text}</Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
                <Card>
                    <Card.Link href={link}
                        onClick={() => {navigate('/pages/Post');}}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{text}</Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
            </Row>
        </Col>
    );
}

export default Contents;
