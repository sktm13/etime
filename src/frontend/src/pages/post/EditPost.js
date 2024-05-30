import {useEffect, useState} from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import {setIsPostChanged, setIsDataLoaded } from "../../store";
import {useCookies} from "react-cookie";
import {useSelector} from "react-redux";
import ReactQuill from "react-quill";


function EditPost (){
    const navigate = useNavigate();
    const params = useParams();

    // 쿠키 데이터 로드
    const [cookie, setCookie] = useCookies(['accessToken'])

    // store 데이터 불러오기
    const isLogined = useSelector(state => state.isLogined)

    // state 생성
    const [ postData, setPostData] = useState([]);
    const [ inputPostTitle, setInputPostTitle ] = useState('');
    const [ inputPostContent, setInputPostContent ] = useState('');


    // 글 데이터 서버에서 불러오기
    useEffect(() => {
        axios.get(`http://localhost:8080/api/post/${params.postId}`)
            .then(res => {
                setPostData(res.data);
                setIsDataLoaded(true);

                setInputPostTitle(res.data.title)
                setInputPostContent(res.data.content)
            })
            .catch(()=>{
                setIsDataLoaded(false);
            })
    }, [params.postId]);

    // 로그인 상태가 아닐 때 로그인 페이지로 이동
    if (!isLogined) {
        return <Navigate to={'/pages/login'} />
    }

    // 글 저장버튼
    const handleSavePost = () => {
        const currentTime = new Date().toISOString();

        axios.put("http://localhost:8080/api/post/", {
            id: params.postId,
            title: inputPostTitle,
            content: inputPostContent,
            postTime: currentTime,
        }, {
            headers: {Authorization: `Bearer ${cookie.accessToken}`}
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

    if (!setIsDataLoaded) {
        return <div>로딩중...</div>
    }

    if (!postData) {
        return <div>post가 존재하지 않음</div>
    }

    return(
        <Container>
            <Col lg={12} xl={8} xxl={6}>
                <div className={"w-100"}>
                    <div className="post__header w-100 d-flex align-items-center">
                        <Col>
                            <h5 className={"editpost__title"}> 글 수정하기</h5>
                        </Col>
                        <div>
                            <Button className={"post__header__button"} variant="secondary" onClick={handleCancelPost}>
                                취소
                            </Button>
                            {' '}
                            <Button className={"post__header__button"} variant="primary" onClick={handleSavePost}>
                                작성
                            </Button>
                        </div>
                    </div>
                    <div className={"w-100 editpost__body"}>
                        <Form style={{width:'100%'}} onSubmit={(e)=>{
                            e.preventDefault()
                        }}>
                            <Form.Group className="mb-6">
                                <Form.Label>글 제목</Form.Label>
                                <Form.Control
                                    style={{width:'100%'}}
                                    type="text"
                                    placeholder="Title"
                                    onChange={(e)=>{
                                        setInputPostTitle(e.target.value);
                                    }}
                                    value={inputPostTitle}
                                />
                                <br/>
                                <Form.Label>글 내용</Form.Label>
                                <ReactQuill
                                    theme="snow"
                                    value={inputPostContent}
                                    onChange={(e)=>{
                                        setInputPostContent(e.target.value)
                                    }}
                                />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </Col>
        </Container>
    )
}

export default EditPost;