// Post.js
// 글 선택시 진입
import {Container, Row, Col, Image, ListGroup, Card } from 'react-bootstrap';
import { Outlet, useParams} from 'react-router-dom';
import MakeComment from "../common/MakeComment";
import {commentData} from "./data";


function Post(props) {

    const params = useParams();

    return (
        <Container>
            <Row className="justify-content-center mt-3">
                <Col xs={8}>
                    <Image src={props.postData[params.postId].thumnail} fluid />
                </Col>
                <Col xs={8}>
                    <Card style={{width:'100%'}}>
                        <Card.Header>
                            <Card.Title>{props.postData[params.postId].title}</Card.Title>
                            <Card.Text>{props.postData[params.postId].date}</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col xs="auto">
                                    <Image src={props.userData[props.postData[params.postId].userId].userImg} roundedCircle style={{ width: '50px', height: '50px' }} />
                                </Col>
                                <Col>
                                    <Card.Text>
                                        <strong>{props.userData[props.postData[params.postId].userId].name}<br /></strong>
                                        {props.userData[props.postData[params.postId].userId].follower}
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Row>
                            <Card.Text>{props.postData[params.postId].text}</Card.Text>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col xs={8}>
                    {
                        props.commentData.map((a, i) => {
                            if (props.commentData[i].postId === 0)
                                return <MakeComment commentData={commentData[i]}/>
                        })
                    }
                </Col>
            </Row>
        </Container>
    );
}
export default Post;
