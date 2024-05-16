import { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreatePost (){

    const navigate = useNavigate();

    const [ inputPostTitle, setInputPostTitle ] = useState('');
    const [ inputPostContent, setInputPostContent ] = useState('');

    // 글 저장버튼
    const handleSavePost = () => {
        const currentTime = new Date().toISOString();

        axios.post("http://localhost:8080/api/post", {
            title: inputPostTitle,
            postTime: currentTime,
            content: inputPostContent,
        })
            .then(() => {
                alert('작성 성공');
                navigate('/');
            })
            .catch(() => {
                alert('작성 실패');
            });
    };

    // 글 작성 취소버튼
    const handleCancelPost = ()=>{
        if (window.confirm('글 작성을 취소하시겠습니까?')) {
            navigate('/');
        }
    }

    return(
<Container fluid>
    <Row xs={8} className="justify-content-center mt-3">
        <Col xs={8}>
            <Card style={{width:'100%'}}>
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <Card.Title>작성</Card.Title>
                    <div>
                        <Button variant="secondary" onClick={handleCancelPost}>
                            Cancel
                        </Button>
                        {' '}
                        <Button variant="primary" onClick={handleSavePost}>
                            Submit
                        </Button>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Row className="justify-content-center">
                        <Col>
                            <Form style={{width:'100%'}} onSubmit={(e)=>{e.preventDefault()}}>
                                <Form.Group className="mb-6">
                                    <Form.Label>Post Title</Form.Label>
                                    <Form.Control style={{width:'100%'}} type="text" placeholder="Title" onChange={(e)=>{
                                        setInputPostTitle(e.target.value);
                                    }}/>
                                    <Form.Label>Post Content</Form.Label>
                                    <Form.Control  style={{width:'100%', height:'30rem'}} as="textarea" rows={3} onChange={(e)=>{
                                        setInputPostContent(e.target.value);
                                    }}/>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <div id="editor"></div>
        </Col>
    </Row>
</Container>
    )
}

export default CreatePost;