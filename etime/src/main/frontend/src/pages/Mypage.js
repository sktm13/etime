// Home.js
import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MakeCard } from '../common/Components';

// 테스트용 임시 데이터입니다 나중에 삭제하세요
// This is temporary test data. Please delete it later
import { userPostData } from "./data";


function MyPage() {
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
			{
				userPostData.map((a, i) => {
				return (<MakeCard userPostData={userPostData[i]} />)})
			}
		</Row>
		<br />
		<hr />
		<h5>최근 본 글</h5>
		<Row>
			{
				userPostData.map((a, i) => {
				return (<MakeCard userPostData={userPostData[i]} />)})
			}
		</Row>
	  </Container>
	);
}


export default MyPage;
