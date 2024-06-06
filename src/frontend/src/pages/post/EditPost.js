import { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPostData, setIsCurrentPostLoaded, setIsPostChanged} from "../../store";
import {useCookies} from "react-cookie";
import jwtDecode from "jwt-decode";

function getByteLength(str) {
    return new TextEncoder().encode(str).length;
}

function EditPost (){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const quillRef = useRef(null);

    const MAX_CONTENT_LENGTH = 65535;

    // 쿠키 데이터 로드
    const [cookie, setCookie] = useCookies(['accessToken'])

    // store 데이터 불러오기
    const userData = useSelector(state => state.userData)
    const currentPostData = useSelector(state => state.currentPostData);

    // state 생성
    const [ inputPostTitle, setInputPostTitle ] = useState('');
    const [ inputPostContent, setInputPostContent ] = useState('');
    const [ inputPostCategory, setInputPostCategory ] = useState('');
    const [ byteLength, setByteLength ] = useState(0);


    useEffect(() => {
        const observer = new MutationObserver((mutations, observer) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    // console.log('Node inserted: ', mutation.addedNodes[0])
                }
            })
        });

        if (quillRef.current) {
            observer.observe(quillRef.current, {
                childList: true,
                subtree: true
            });
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    // 서버에서 글 데이터 로드
    useEffect(() => {
        axios.get(`http://localhost:8080/api/posts/${params.postId}`, {
            headers: {Authorization: `Bearer ${cookie.accessToken}`},
        })
            .then((res) => {
                dispatch(setCurrentPostData(res.data));
                dispatch(setIsCurrentPostLoaded(true));
            })
            .catch((error)=>{
                console.log(error)
                dispatch(setIsCurrentPostLoaded(false));
            })
        setInputPostTitle(currentPostData.title)
        setInputPostContent(currentPostData.content)
    }, [params.postId]);


    // 로그인 상태가 아닐 때 로그인 페이지로 이동
    if (!cookie.accessToken) {
        return <Navigate to={'/pages/login'} />;
    }

    // 데이터 적용 + byte 용량 측정
    const handleContentInput = (value) => {
        setInputPostContent(value);
        setByteLength(getByteLength(value));
        if (byteLength > MAX_CONTENT_LENGTH) {
            alert("글자수 제한을 초과하였습니다.")
        }
    }

    // 글 저장버튼
    const handleSavePost = () => {
        if (byteLength > MAX_CONTENT_LENGTH) {
            alert("글자수 제한을 초과하였습니다.")
            return;
        }
        const currentTime = new Date().toISOString();

        axios.put(`http://localhost:8080/api/posts/${params.postId}`, {
            title: inputPostTitle,
            content: inputPostContent,
            category: inputPostCategory,
            member: userData,
            postDate: currentTime,
        }, {
            headers: { Authorization: `Bearer ${cookie.accessToken}` },
        })
            .then((res) => {
                alert('작성 성공');
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
                                    value={inputPostTitle}
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
                                <div ref={quillRef}>
                                    <ReactQuill
                                        theme="snow"
                                        value={inputPostContent}
                                        onChange={handleContentInput}
                                    />
                                </div>
                                <div>{byteLength} / {MAX_CONTENT_LENGTH} byte</div>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </Col>
        </Container>
    )
}

export default EditPost;