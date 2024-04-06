// Home.js
import React from 'react';
import { Container, Row, Col, Image, MdGrade, Card } from 'react-bootstrap';


const posts = [
	{ id: 1, title: "Post 1", content: "This is the first post." },
	{ id: 2, title: "Post 2", content: "This is the second post." },
	{ id: 3, title: "Post 3", content: "This is the third post." },
  ];


function MyPage() {
	return (
	  <Container>
		<Row className="my-3 align-items-center">
			<Col xs={1}>
			</Col>
			<Col xs={1}>
				<Image src="http://via.placeholder.com/150" roundedCircle />
				<Row>
					<h4>Username</h4>
				</Row>
			</Col>
			<Col xs={1}>
				<Image src="http://via.placeholder.com/50" size="2em" />
			</Col>
		
		</Row>
		<br />
		<hr />
		<h5>내 글</h5>
		<Row>
			<Card>
			<Card.Link href='/post'>
				<Card.Img variant="top" src='http://via.placeholder.com/320x180' />
				<Card.Body>
				<Card.Title>Title</Card.Title>
				<Card.Text>Text</Card.Text>
				</Card.Body>
			</Card.Link>
			</Card>
			<Card>
			<Card.Link href='/post'>
				<Card.Img variant="top" src='http://via.placeholder.com/320x180' />
				<Card.Body>
				<Card.Title>Title</Card.Title>
				<Card.Text>Text</Card.Text>
				</Card.Body>
			</Card.Link>
			</Card>
			<Card>
			<Card.Link href='/post'>
				<Card.Img variant="top" src='http://via.placeholder.com/320x180' />
				<Card.Body>
				<Card.Title>Title</Card.Title>
				<Card.Text>Text</Card.Text>
				</Card.Body>
			</Card.Link>
			</Card>
		</Row>
		<br />
		<hr />
		<h5>최근 본 글</h5>
		<Row>
			<Card>
			<Card.Link href='/post'>
				<Card.Img variant="top" src='http://via.placeholder.com/320x180' />
				<Card.Body>
				<Card.Title>Title</Card.Title>
				<Card.Text>Text</Card.Text>
				</Card.Body>
			</Card.Link>
			</Card>
			<Card>
			<Card.Link href='/post'>
				<Card.Img variant="top" src='http://via.placeholder.com/320x180' />
				<Card.Body>
				<Card.Title>Title</Card.Title>
				<Card.Text>Text</Card.Text>
				</Card.Body>
			</Card.Link>
			</Card>
			<Card>
			<Card.Link href='/post'>
				<Card.Img variant="top" src='http://via.placeholder.com/320x180' />
				<Card.Body>
				<Card.Title>Title</Card.Title>
				<Card.Text>Text</Card.Text>
				</Card.Body>
			</Card.Link>
			</Card>
		</Row>
	  </Container>
	);
  }

export default MyPage;
