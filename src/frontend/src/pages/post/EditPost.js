import {useEffect, useState} from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import {setIsPostChanged, setIsPostLoaded } from "../../store";


function EditPost (){

    const navigate = useNavigate();
    const params = useParams();

    // const postData = useSelector((state) => state.postData);
    const [ postData, setPostData] = useState([]);
    const [ inputPostTitle, setInputPostTitle ] = useState('');
    const [ inputPostContent, setInputPostContent ] = useState('');

    // 글 저장버튼
    const handleSavePost = () => {
        const currentTime = new Date().toISOString();

        axios.put("http://localhost:8080/api/post/", {
            id: params.postId,
            title: inputPostTitle,
            content: inputPostContent,
            postTime: currentTime,
        })
            .then(() => {
                alert('수정 성공');
                setIsPostChanged(true);
                navigate('/');
            })
            .catch(() => {
                alert('수정 실패');
            });
    };

    // 글 작성 취소버튼
    const handleCancelPost = ()=>{
        if (window.confirm('글 수정을 취소하시겠습니까?')) {
            navigate('/');
        }
    }

    // 글 데이터 서버에서 불러오기
    useEffect(() => {
        axios.get(`http://localhost:8080/api/post/${params.postId}`)
            .then(res => {
                setPostData(res.data);
                setIsPostLoaded(true);

                setInputPostTitle(res.data.title)
                setInputPostContent(res.data.content)
            })
            .catch(()=>{
                setIsPostLoaded(false);
            })
    }, [params.postId]);

    if (!setIsPostLoaded) {
        return <div>로딩중...</div>
    }

    if (!postData) {
        return <div>post가 존재하지 않음</div>
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
                                            <Form.Control
                                                style={{width:'100%'}}
                                                type="text"
                                                placeholder="Title"
                                                onChange={(e)=>{setInputPostTitle(e.target.value);}}
                                                value={inputPostTitle}
                                            />
                                            <Form.Label>Post Content</Form.Label>
                                            <Form.Control
                                                style={{width:'100%', height:'30rem'}}
                                                as="textarea"
                                                rows={3}
                                                onChange={(e)=>{setInputPostContent(e.target.value);}}
                                                value={inputPostContent}
                                            />
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

export default EditPost;