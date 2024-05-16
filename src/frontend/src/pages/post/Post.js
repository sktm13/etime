// Post.js
// 글 선택시 진입
import {Container, Row, Col, Image, Card, Button} from 'react-bootstrap';
import {useNavigate, useParams} from 'react-router-dom';
import MakeComment from "../../common/MakeComment";

import {useSelector} from "react-redux";
import axios from "axios";
import {useEffect, useState} from "react";
import {setIsPostLoaded} from "../../store";


function Post() {
    const params = useParams();
    const navigate = useNavigate();

    // store 데이터 불러오기
    const userData = useSelector(state => state.userData);
    const postData = useSelector((state) => state.postData);
    const commentData = useSelector((state) => state.commentData);

    const [post, setPost] = useState(null);
    const [error, setError] = useState(false);

    // 글 수정 버튼
    const handleModifyPost = () => {
        navigate("../pages/editpost/" + (params.postId))
    }

    // 글 삭제 버튼
    const handleDeletePost = () => {
        axios.delete(`http://localhost:8080/api/post/${params.postId}`)
            .then(() => {
                alert('삭제 성공');
                navigate('/');
            })
            .catch(() => {
                alert('삭제 실패');
            });
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/api/post/${params.postId}`)
            .then(res => {
                setPost(res.data);
                setIsPostLoaded(true);
            })
            .catch(()=>{
                setIsPostLoaded(false);
            })
    }, [params.postId]);


    if (!setIsPostLoaded) {
        return <div>로딩중...</div>
    }
    
    if (error) {
        return <div>에러 발생</div>
    }
    
    if (!post) {
        return <div>post가 존재하지 않음</div>
    }

    return (
        <Container>
            <Row className="justify-content-center mt-3">
                <Col xs={8}>
                    <Image src="http://via.placeholder.com/800x450" fluid />
                </Col>
                <Col xs={8}>
                    <Card style={{width:'100%'}}>
                        <Card.Header>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.date}</Card.Text>
                            <Button onClick={handleModifyPost}>수정</Button>
                            <Button onClick={handleDeletePost}>삭제</Button>
                        </Card.Header>
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col xs="auto">
                                    <Image src="http://via.placeholder.com/800x450" roundedCircle style={{ width: '50px', height: '50px' }} />
                                </Col>
                                <Col>
                                    <Card.Text>
                                        {/*<strong>{userData[postData[params.postId].userId].name}<br /></strong>*/}
                                        {/*{userData[postData[params.postId].userId].follower}*/}
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Row>
                            <Card.Text>{post.content}</Card.Text>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col xs={8}>
                    {
                        commentData.map((a, i) => {
                            if (commentData[i].postId === Number(params.postId))
                                return <MakeComment i={i} />
                        })
                    }
                </Col>
            </Row>
        </Container>
    );
}
export default Post;
