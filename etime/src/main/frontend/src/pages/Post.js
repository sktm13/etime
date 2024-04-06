// Post.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


const username = 'jacksungja';
const date = '2023-04-05';
const imageUrl = 'http://via.placeholder.com/150';


function Post() {
    return (
        <Container>
            <Row className="justify-content-center mt-3">
                <Col md={8}>
                    <Image src="http://via.placeholder.com/800x450" fluid />
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col md={8}>
                    <h2>영상 제목</h2>
                    <Row className="align-items-center">
                        <Col xs="auto">
                            <Image src={imageUrl} roundedCircle style={{ width: '50px', height: '50px' }} />
                        </Col>
                        <Col>
							<strong>{username}</strong>
							<p>gudokja</p>
                        </Col>
                    </Row>
					<Row>
						{date}
					</Row>
					<Row>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt commodi doloremque unde delectus
							quae, ratione id est dolore excepturi recusandae eligendi rerum mollitia consequatur minima.
							Quae perferendis maiores voluptatum nihil?
						</p>
					</Row>
                </Col>
            </Row>
        </Container>
    );
}
export default Post;
