import { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios';


function CreatePost (props){

    const [ submitted, setSubmitted ] = useState(false);

    const [ postTime, setPostTime ] = useState('');
    const [ postTitle, setPostTitle ] = useState('');
    const [ postContent, setPostContent ] = useState('');

    const handleSavePost = () => {
        const currentTime = new Date().toISOString();
        setPostTime(currentTime);

        axios.post("http://localhost:8080/api/savepost", {
            title: postTitle,
            content: postContent,
            postTime: currentTime
        })
            .then((res) => {
                alert('작성 성공');
            })
            .catch((error) => {
                alert('작성 실패');
            });
    };

    return(
<Container fluid>
    <Row xs={8} className="justify-content-center mt-3">
        <Col xs={8}>
            <Card style={{width:'100%'}}>
                <Card.Header>
                    <Card.Title>title</Card.Title>
                    <Button className='d-flex justify-content-end' variant="primary" onClick={handleSavePost}>
                        Submit
                    </Button>
                </Card.Header>
                <Card.Body>
                    <Row className="justify-content-center">
                        <Col>
                            <Form style={{width:'100%'}} onSubmit={handleSavePost}>
                                <Form.Group className="mb-6">
                                    <Form.Label>Post Title</Form.Label>
                                    <Form.Control style={{width:'100%'}} type="text" placeholder="Title" onChange={(e)=>{
                                        setPostTitle(e.target.value);
                                    }}/>
                                    <Form.Label>Post Content</Form.Label>
                                    <Form.Control  style={{width:'100%', height:'30rem'}} as="textarea" rows={3} onChange={(e)=>{
                                        setPostContent(e.target.value);
                                    }}/>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>
    )
}

export default CreatePost;