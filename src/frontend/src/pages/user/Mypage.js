// Mypage.js
// 마이페이지
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { MakeCard } from '../../common/MakeCard';
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

function MyPage(props) {
	// store에서 데이터 불러오기
	const userData = useSelector((state) => state.userData);
	const isLogined = useSelector(state => state.isLogined)

	// 로그인 상태가 아닐 때 로그인 페이지로 이동
	if (!isLogined) {
		return <Navigate to={'/pages/login'} />
	}

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
				<Row>설정1</Row>
				<Row>설정2</Row>
				<Row>설정3</Row>
				<Row>설정4</Row>
			</Col>
		
		</Row>
		<br />
		<hr />
		  {/*
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
		  */}

	  </Container>
	);
}


export default MyPage;
