import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import axios from 'axios';

function CreatePost (){
    return(
        <Container>
            <Row className="justify-content-center mt-3">
                <Col>
                    <Form>
                        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Post Title</Form.Label>
                            <Form.Control type="email" placeholder="Title" />
                        </Form.Group>
                        <Form.Group className="mb-6" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Post Content</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <Button variant="primary" type="submit" >
                        Create
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CreatePost;