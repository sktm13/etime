import { useState } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
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
    const userData = useSelector(state => state.userData)

    // state 생성
    const [ inputPostTitle, setInputPostTitle ] = useState('');
    const [ inputPostContent, setInputPostContent ] = useState('');
    const [ inputPostCategory, setInputPostCategory ] = useState('');


    // 로그인 상태가 아닐 때 로그인 페이지로 이동
    if (!isLogined) {
        return <Navigate to={'/pages/login'} />
    }

    // 글 저장버튼
    const handleSavePost = () => {
        const currentTime = new Date().toISOString();

        axios.post("http://localhost:8080/api/posts/", {
            title: inputPostTitle,
            content: inputPostContent,
            category: inputPostCategory,
            member: userData,
            postDate: currentTime,
        }, {
            headers: {Authorization: `Bearer ${cookie.accessToken}`},
        })
            .then((res) => {
                alert('작성 성공');
                console.log(res.data);
                dispatch(setIsPostChanged(true));
                navigate('/');
            })
            .catch((error) => {
                alert('작성 실패');
                console.log(error)
            });
    };

    // 글 작성 취소버튼
    const handleCancelPost = ()=>{
        if (window.confirm('글 작성을 취소하시겠습니까?')) {
            navigate('/');
        }
    }

    return(
        <Container>
            <Col lg={12} xl={8} xxl={6} className={"container__maxwidth"}>
                <div className={"w-100"}>
                    <div className="post__header w-100 d-flex align-items-center">
                        <Col>
                            <h5 className={"editpost__title"}>새로운 글 작성하기</h5>
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
                        <Form style={{width: '100%'}} onSubmit={(e) => {
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
                                    }}/>
                                <br/>
                                <Form.Label>글 카테고리</Form.Label>
                                <Form.Control
                                    style={{width:'100%'}}
                                    type="text"
                                    placeholder="Category"
                                    onChange={(e)=>{
                                        setInputPostCategory(e.target.value);
                                    }}/>
                                <br/>
                                <Form.Label>글 내용</Form.Label>
                                <ReactQuill
                                    theme="snow"
                                    value={inputPostContent}
                                    onChange={setInputPostContent}
                                    />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </Col>
        </Container>
    )
}

export default CreatePost;