// Mypage.js
// 마이페이지
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { MakeCard } from '../common/MakeCard';


function MyPage(props) {

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
			</Col>
		
		</Row>
		<br />
		<hr />
		<h5>내 글</h5>
		<Row>
			{
				props.postData.map((a, i) => {
					return (<MakeCard postData={props.postData[i]} userData={props.userData[i]} />)})
			}
		</Row>
		<br />
		<hr />
		<h5>최근 본 글</h5>
		<Row>
			{
				props.postData.map((a, i) => {
					return (<MakeCard postData={props.postData[i]} userData={props.userData[i]} />)})
			}
		</Row>
	  </Container>
	);
}


export default MyPage;
