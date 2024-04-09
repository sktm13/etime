// Post.js
// 글 선택시 진입
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


function Post(props) {

    const params = useParams();

    return (
        <Container>
            <Row className="justify-content-center mt-3">
                <Col xs={8}>
                    <Image src={props.postData[params.postId].thumnail} fluid />
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col xs={8}>
                    <h2>{props.postData[params.postId].title}</h2>
                    <Row className="align-items-center">
                        <Col xs="auto">
                            <Image src={props.userData[props.postData[params.postId].userId].userImg} roundedCircle style={{ width: '50px', height: '50px' }} />
                        </Col>
                        <Col>
							<strong>{props.userData[props.postData[params.postId].userId].name}</strong>
							<p>{props.userData[props.postData[params.postId].userId].follower}</p>
                        </Col>
                    </Row>
					<Row>
						<p>{props.postData[params.postId].date}</p>
					</Row>
					<Row>
						<p>{props.postData[params.postId].text}</p>
					</Row>
                </Col>
            </Row>
        </Container>
    );
}
export default Post;
