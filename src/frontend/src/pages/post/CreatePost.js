import { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import {Navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import {useDispatch, useSelector} from "react-redux";
import {setIsPostChanged} from "../../store";
import {useCookies} from "react-cookie";

function CreatePost (){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // 쿠키 데이터 로드
    const [cookie, setCookie] = useCookies(['accessToken'])

    // store 데이터 불러오기
    const isLogined = useSelector(state => state.isLogined)

    // state 생성
    const [ inputPostTitle, setInputPostTitle ] = useState('');
    const [ inputPostContent, setInputPostContent ] = useState('');


    // 로그인 상태가 아닐 때 로그인 페이지로 이동
    if (!isLogined) {
        return <Navigate to={'/pages/login'} />
    }

    // 글 저장버튼
    const handleSavePost = () => {
        const currentTime = new Date().toISOString();

        axios.post("http://localhost:8080/api/post", {
            title: inputPostTitle,
            postTime: currentTime,
            content: inputPostContent,
        }, {
            headers: {Authorization: `Bearer ${cookie.accessToken}`}
        })
            .then(() => {
                alert('작성 성공');
                dispatch(setIsPostChanged(true));
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
                    <Card.Title>새로운 글 작성하기</Card.Title>
                    <div>
                        <Button variant="secondary" onClick={handleCancelPost}>
                            취소
                        </Button>
                        {' '}
                        <Button variant="primary" onClick={handleSavePost}>
                            작성
                        </Button>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Row className="justify-content-center">
                        <Col>
                            <Form style={{width:'100%'}} onSubmit={(e)=>{e.preventDefault()}}>
                                <Form.Group className="mb-6">
                                    <Form.Label>글 제목</Form.Label>
                                    <Form.Control style={{width:'100%'}} type="text" placeholder="Title" onChange={(e)=>{
                                        setInputPostTitle(e.target.value);
                                    }}/>
                                    <Form.Label>글 내용</Form.Label>
                                    {/*<Form.Control  style={{width:'100%', height:'30rem'}} as="textarea" rows={3} onChange={(e)=>{*/}
                                    {/*    setInputPostContent(e.target.value);*/}
                                    {/*}}/>*/}
                                    <ReactQuill theme="snow" value={inputPostContent} onChange={setInputPostContent} />

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