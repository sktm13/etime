// Home.js
import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const title = "Title";
const text = "Text";
const link = "#";
const img = "http://via.placeholder.com/320x180";


function MyPage() {

	const navigate = useNavigate();

	return (
	  <Container>
		<Row className="my-3 align-items-center">
			<Col xs={2}>
			</Col>
			<Col xs={1}>
				<Image src="http://via.placeholder.com/150" roundedCircle />
				<Row>
					<h4>Username</h4>
				</Row>
			</Col>
			<Col xs={2}>
				<Image src="http://via.placeholder.com/50" size="2em" />
			</Col>
			<Col>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
				<Row>설정설정설정설정설정설정설정설정설정설정설정설정</Row>
			</Col>
		
		</Row>
		<br />
		<hr />
		<h5>내 글</h5>
		<Row>
			<Card>
				<Card.Link href={link}
					onClick={() => {navigate('/pages/Post');}}>
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{text}</Card.Text>
					</Card.Body>
				</Card.Link>
			</Card>
			<Card>
				<Card.Link href={link}
					onClick={() => {navigate('/pages/Post');}}>
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{text}</Card.Text>
					</Card.Body>
				</Card.Link>
			</Card>
			<Card>
				<Card.Link href={link}
					onClick={() => {navigate('/pages/Post');}}>
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{text}</Card.Text>
					</Card.Body>
				</Card.Link>
			</Card>
		</Row>
		<br />
		<hr />
		<h5>최근 본 글</h5>
		<Row>
			<Card>
				<Card.Link href={link}
					onClick={() => {navigate('/pages/Post');}}>
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{text}</Card.Text>
					</Card.Body>
				</Card.Link>
			</Card>
			<Card>
				<Card.Link href={link}
					onClick={() => {navigate('/pages/Post');}}>
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{text}</Card.Text>
					</Card.Body>
				</Card.Link>
			</Card>
			<Card>
				<Card.Link href={link}
					onClick={() => {navigate('/pages/Post');}}>
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{text}</Card.Text>
					</Card.Body>
				</Card.Link>
			</Card>
			
		</Row>
	  </Container>
	);
  }

export default MyPage;
