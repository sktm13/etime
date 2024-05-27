// Post.js
// 글 선택시 진입
import '../../style/App.css'

import {Container, Row, Col, Image, Card, Button, ListGroup} from 'react-bootstrap';
import {useNavigate, useParams} from 'react-router-dom';

import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setIsPostChanged} from "../../store";


function Post() {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // store 데이터 불러오기
    const userData = useSelector(state => state.userData);
    const storePostData = useSelector((state) => state.postData);
    const commentData = useSelector((state) => state.commentData);
    const isDataLoaded = useSelector(state => state.isDataLoaded);
    const categoryData = useSelector(state => state.categoryData);

    const postData = storePostData[params.postId];

    // 글 수정 버튼
    const handleModifyPost = () => {
        navigate("../pages/editpost/" + (params.postId))
    }

    // 글 삭제 버튼
    const handleDeletePost = () => {
        axios.delete(`http://localhost:8080/api/post/${params.postId}`)
            .then(() => {
                alert('삭제 성공');
                dispatch(setIsPostChanged(true));
                navigate('/');
            })
            .catch(() => {
                alert('삭제 실패');
            });
    };

    // useEffect(() => {
    //     axios.get(`http://localhost:8080/api/post/${params.postId}`)
    //         .then(res => {
    //             setPostData(res.data);
    //             setIsDataLoaded(true);
    //         })
    //         .catch(()=>{
    //             setIsDataLoaded(false);
    //         })
    // }, [params.postId]);


    if (!isDataLoaded) {
        return <div>로딩중...</div>
    }

    if (!postData || !userData) {
        return <div>데이터가 존재하지 않음</div>
    }

    return (
        <Container className={"d-flex justify-content-center"}>
            <Col xs={10}>
                <Row className={"post__header"}>
                    <Col>
                        <h6 className={"post__header__category"}>
                            {categoryData[postData.category - 1].name}
                        </h6>
                        <h5>{postData.title}</h5>
                    </Col>
                    <Col className={"d-flex justify-content-end align-items-center"}>
                        <Button onClick={handleModifyPost} className={"post__header__button"}>수정</Button>
                        <Button onClick={handleDeletePost} className={"post__header__button"}>삭제</Button>
                    </Col>
                </Row>
                <Row className={"post__header"}>
                    <Col className={"d-flex justify-content-between align-items-center"}>
                        <div className={"d-flex align-items-center"}>
                            <Image
                                src="http://via.placeholder.com/200x200"
                                roundedCircle
                                style={{width: '50px', height: '50px'}}/>
                            <h6 className={"post__header__author"}>{userData[postData.userId - 1].displayName}</h6>
                        </div>
                        <small><strong>작성일 {postData.date}</strong></small>
                    </Col>
                </Row>
                <Row className={"post__body"}>
                    <Col>
                        <Image src="http://via.placeholder.com/800x450" />
                        <Row>
                            <p>{postData.content}</p>
                            <p>{postData.content}</p>
                            <p>{postData.content}</p>
                            <p>{postData.content}</p>
                        </Row>
                    </Col>
                </Row>
                <Row className={"post__footer"}>
                    {
                        commentData.map((a, i) => {
                            return (
                                <div className={"post__footer__comment"}>
                                    <div className="post__footer__commentTitle d-flex justify-content-between align-items-center">
                                        <div className={"d-flex align-items-center"}>
                                            <Image className={"post__footer__commentImage"}
                                                   src="http://via.placeholder.com/200x200"
                                                   roundedCircle />
                                            <p className={"m-0"}>
                                                {userData[commentData[i].userId - 1].displayName}
                                            </p>
                                        </div>
                                        <small>
                                            작성일 {commentData[i].date}
                                        </small>
                                    </div>
                                    <p className={"post__footer__commentContent"}>
                                        {commentData[i].content}
                                    </p>
                                </div>
                            )
                        })
                    }
                </Row>
            </Col>
        </Container>
    );
}
export default Post;
