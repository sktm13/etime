// Post.js
// 글 선택시 진입
import {Container, Row, Col, Image, Card } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import MakeComment from "../common/MakeComment";

import {useSelector} from "react-redux";


function Post() {
    const params = useParams();

    // store 데이터 불러오기
    const userData = useSelector(state => state.userData);
    const postData = useSelector((state) => state.postData);
    const commentData = useSelector((state) => state.commentData);

    return (
        <Container>
            <Row className="justify-content-center mt-3">
                <Col xs={8}>
                    <Image src={postData[params.postId].thumnail} fluid />
                </Col>
                <Col xs={8}>
                    <Card style={{width:'100%'}}>
                        <Card.Header>
                            <Card.Title>{postData[params.postId].title}</Card.Title>
                            <Card.Text>{postData[params.postId].date}</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col xs="auto">
                                    <Image src={userData[postData[params.postId].userId].userImg} roundedCircle style={{ width: '50px', height: '50px' }} />
                                </Col>
                                <Col>
                                    <Card.Text>
                                        <strong>{userData[postData[params.postId].userId].name}<br /></strong>
                                        {userData[postData[params.postId].userId].follower}
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Row>
                            <Card.Text>{postData[params.postId].text}</Card.Text>
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
