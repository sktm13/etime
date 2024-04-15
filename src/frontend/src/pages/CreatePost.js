import { useState, useEffect } from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import axios from 'axios';


function CreatePost (){

    const [ submitted, setSubmitted ] = useState(false);

    const [ postTime, setPostTime ] = useState(0);
    const [ postTitle, setPostTitle ] = useState('');
    const [ postContent, setPostContent ] = useState('');

    const [ postSuccess, setPostSuccess ] = useState(null);


    return(
        <Container>
            <Row className="justify-content-center mt-3">
                <Col>
                    <Form>
                        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Post Title</Form.Label>
                            <Form.Control type="email" placeholder="Title" onChange={(e)=>{
                                setPostTitle(e.target.value);
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-6" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Post Content</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e)=>{
                                setPostContent(e.target.value);
                            }}/>
                        </Form.Group>
                    </Form>
                    <Button variant="primary" onClick={()=>{
                        axios.post("http://localhost:8080/api/test1", JSON.stringify({
                            post_time: postTime,
                            content: postTitle,
                            title: postContent,
                        }))
                            .then((res) => {
                                alert('작성 성공')
                            })
                            .catch(() => {
                                alert('작성 실패')
                            })
                    }}>
                        Submit
                    </Button>
                </Col>
            </Row>
            <p>postTitle : {postTitle}</p>
            <p>postContent : {postContent}</p>
        </Container>
    )
}

export default CreatePost;