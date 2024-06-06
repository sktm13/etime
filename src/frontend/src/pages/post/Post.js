// Post.js
// 글 선택시 진입
import '../../style/App.css'

import {Container, Row, Col, Image, Card, Button, ListGroup, Form, FloatingLabel} from 'react-bootstrap';
import {Navigate, useNavigate, useParams} from 'react-router-dom';

import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {
    setCurrentPostData,
    setIsCurrentPostLoaded,
    setIsDataLoaded,
    setIsPostChanged,
    setIsPostLoaded,
    setPostData
} from "../../store";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import ReactQuill from "react-quill";

function getByteLength(str) {
    return new TextEncoder().encode(str).length;
}

function Post() {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [cookie, setCookie] = useCookies(['accessToken'])

    // store 데이터 불러오기
    const isDataLoaded = useSelector(state => state.isDataLoaded);
    const currentPostData = useSelector(state => state.currentPostData);
    const userData = useSelector(state => state.userData);

    // state 생성
    const [inputComment, setInputComment] = useState('');
    const [commentData, setCommentData] = useState();
    const [byteLength, setByteLength] = useState(0);
    const [commentCount, setCommentCount] = useState(0);
    const MAX_CONTENT_LENGTH = 1024;



    // 글 수정 버튼
    const handleModifyPost = () => {
        navigate("../pages/editpost/" + (params.postId))
    }

    // 글 삭제 버튼
    const handleDeletePost = () => {
        axios.delete(`http://localhost:8080/api/posts/${params.postId}`)
            .then(() => {
                alert('삭제 성공');
                dispatch(setIsPostChanged(true));
                navigate('/');
            })
            .catch(() => {
                alert('삭제 실패');
            });
    };

    // 댓글 저장버튼
    const handleSaveComment = () => {
        if (byteLength > MAX_CONTENT_LENGTH) {
            alert("글자수 제한을 초과하였습니다.")
            return;
        }
        const currentTime = new Date().toISOString();

        setCommentData({
            id: commentCount,
            content: inputComment,
            date: currentTime,
            member: userData,
        })
    };

    // 데이터 적용 + byte 용량 측정
    const handleCommentInput = (value) => {
        setInputComment(value);
        setByteLength(getByteLength(value));
        if (byteLength > MAX_CONTENT_LENGTH) {
            alert("글자수 제한을 초과하였습니다.")
        }
    }


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
    }, [params.postId]);

    // 로그인 상태가 아닐 때 로그인 페이지로 이동
    if (!cookie.accessToken) {
        return <Navigate to={'/pages/login'} />;
    }

    if (!setIsCurrentPostLoaded) {
        return <div>데이터가 존재하지 않음</div>
    }


    return (
        <Container className={"container__maxwidth"}>
            <Col lg={12} xl={8} xxl={6}>
                <Row className={"post__header"}>
                    <Col>
                        <h6 className={"post__header__category"}>
                            카테고리
                        </h6>
                        <h5>{currentPostData.title}</h5>
                    </Col>
                    <Col className={"d-flex justify-content-end align-items-center"}>
                        <Button onClick={handleModifyPost} className={"post__header__button"}>수정</Button>
                        <Button onClick={handleDeletePost} className={"post__header__button"}>삭제</Button>
                    </Col>
                </Row>
                <Row className={"post__header"}>
                    <div className={"d-flex align-items-center"}>
                        <Col className={"d-flex align-items-center"}>
                            <Image
                                src="http://via.placeholder.com/200x200"
                                roundedCircle
                                style={{width: '50px', height: '50px'}}/>
                            {
                                currentPostData.member ? (
                                    <h6 className={"post__header__author"}>{currentPostData.member.nickname}</h6>
                                ) : (
                                    <h6 className={"post__header__author"}>작성자 정보 없음</h6>
                                )
                            }
                        </Col>
                        <small><strong>작성일 : {currentPostData.postDate}</strong></small>
                    </div>
                </Row>
                <Row className={"post__body"}>
                    <Col>
                        <Image src="http://via.placeholder.com/800x450" />
                        <Row>
                            <div dangerouslySetInnerHTML={{__html: currentPostData.content}} />
                        </Row>
                    </Col>
                </Row>
                <Row className={"post__footer"}>
                    <Row>
                        <div className={"post__footer__comment"}>
                            <p>댓글 작성</p>
                            <div className="post__footer__commentTitle d-flex align-items-center">
                                <Col className={"d-flex align-items-center"}>
                                    <Image className={"post__footer__commentImage"}
                                           src="http://via.placeholder.com/200x200"
                                           roundedCircle/>
                                    <p className={"m-0"}>
                                        {
                                            userData ? (
                                                userData.nickname
                                            ) : (
                                                "사용자"
                                            )
                                        }
                                    </p>
                                </Col>
                                <Col className={"d-flex justify-content-end"}>
                                    <Button className={"post__header__button"} variant="primary" onClick={handleSaveComment}>
                                        작성
                                    </Button>
                                </Col>
                            </div>
                                <Form.Control
                                    as="textarea"
                                    placeholder="댓글을 남겨보세요!"
                                    className={"w-100"}
                                    style={{ height: '8rem' }}
                                    onChange={(e) => {
                                        handleCommentInput(e.target.value);
                                    }}
                                />
                            <div>{byteLength} / {MAX_CONTENT_LENGTH} byte</div>
                            <br/>
                        </div>
                    </Row>

                    {
                        commentData ? (
                            <div className={"post__footer__comment"}>
                                <div className="post__footer__commentTitle d-flex justify-content-between align-items-center">
                                    <Col className={"d-flex align-items-center"}>
                                        <Image className={"post__footer__commentImage"}
                                               src="http://via.placeholder.com/200x200"
                                               roundedCircle />
                                        <p className={"m-0"}>
                                            {commentData.member.nickname}
                                        </p>
                                    </Col>
                                    <small>
                                        작성일 {commentData.date}
                                    </small>
                                </div>
                                <p className={"post__footer__commentContent"}>
                                    {commentData.content}
                                </p>
                            </div>

                            // commentData.map((a, i) => {
                            //     return (
                            //         <div className={"post__footer__comment"}>
                            //             <div className="post__footer__commentTitle d-flex justify-content-between align-items-center">
                            //                 <Col className={"d-flex align-items-center"}>
                            //                     <Image className={"post__footer__commentImage"}
                            //                            src="http://via.placeholder.com/200x200"
                            //                            roundedCircle />
                            //                     <p className={"m-0"}>
                            //                         {commentData[i].author.displayName}
                            //                     </p>
                            //                 </Col>
                            //                 <small>
                            //                     작성일 {commentData[i].date}
                            //                 </small>
                            //             </div>
                            //             <p className={"post__footer__commentContent"}>
                            //                 {commentData[i].content}
                            //             </p>
                            //         </div>
                            //     )})

                        ) : (
                            <div className={"post__footer__comment"}>
                                <p className={"post__footer__commentContent"}>
                                    댓글이 없습니다.
                                </p>
                            </div>
                        )

                    }
                </Row>
            </Col>
        </Container>
    );
}

export default Post;
