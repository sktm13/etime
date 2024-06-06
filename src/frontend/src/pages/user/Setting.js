// Setting.js
// 마이페이지
import {Col, Container, Image, Nav, ProgressBar, Row, Tab} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {setIsDataLoaded, setIsLogined, setUserData} from "../../store";
import {useCookies} from "react-cookie";
import {jwtDecode} from "jwt-decode";
import {useEffect} from "react";

function Setting() {
	const [cookie, setCookie] = useCookies();
	const dispatch = useDispatch();

	// store에서 데이터 불러오기
	const userData = useSelector((state) => state.userData);
	const isLogined = useSelector(state => state.isLogined);


	// 토큰을 디코드, userData에 저장
	const saveUserData = (accessToken) => {
		const token = accessToken;
		const decodedToken = jwtDecode(token);
		dispatch(setUserData(decodedToken));
		dispatch(setIsDataLoaded(true))
	}

	useEffect(() => {
		if (cookie.accessToken) {
			dispatch(setIsLogined(true));
			saveUserData(cookie.accessToken);
		}
	}, [cookie.accessToken, dispatch]);


	// 로그인 상태가 아닐 때 로그인 페이지로 이동
	if (!isLogined) {
		return <Navigate to={'/pages/login'} />
	}

	return (
	  <Container className={"container__maxwidth"}>
		  <Col lg={12} xl={8} xxl={6}>
			  <Row className={"post__header align-items-center"}>
				  <h5>설정</h5>
			  </Row>
			  <Tab.Container defaultActiveKey="profile">
				  <Row>
					  <Col xs={"1"} className={"m-0 p-0"}>
						  <Nav variant="tabs" className="flex-column setting__tab__container">
							  <Nav.Item className={"setting__tab"}>
								  <Nav.Link eventKey="profile" className={"setting__tab__list"}>
								  	프로필
								  </Nav.Link>
							  </Nav.Item>
							  <Nav.Item className={"setting__tab"}>
								  <Nav.Link eventKey="license" className={"setting__tab__list"}>
								  	자격증명
								  </Nav.Link>
							  </Nav.Item>
							  <Nav.Item className={"setting__tab"}>
								  <Nav.Link eventKey="subscribe" className={"setting__tab__list"}>
								  	구독
								  </Nav.Link>
							  </Nav.Item>
							  <Nav.Item className={"setting__tab"}>
								  <Nav.Link eventKey="purchase" className={"setting__tab__list"}>
								  	결제
								  </Nav.Link>
							  </Nav.Item>
							  <Nav.Item className={"setting__tab"}>
								  <Nav.Link eventKey="account" className={"setting__tab__list"}>
								  	계정
								  </Nav.Link>
							  </Nav.Item>
						  </Nav>
					  </Col>
					  <Col xs={"9"}>
						  <Tab.Content className={"m-4"}>
							  <Tab.Pane eventKey="profile">
								  <Row className={"m-4 align-items-center"}>
									  <Col xs={4}>
										  <Row>
											  <Image src="http://via.placeholder.com/150" roundedCircle/>
										  </Row>
										  <Row className={"text-center mt-3"}>
											  <h5>{userData.nickname}</h5>
										  </Row>
									  </Col>
									  <Col>
										  <Row className={"m-4 setting__list__progressbar"}>
											  <p className={"m-0 p-1"}>현재 레벨 : {userData.grade}</p>
											  <p className={"m-0 p-1"}>다음 레벨까지 남은 경험치 : 38,000</p>
											  <ProgressBar className={"setting__list__progressbar"} animated min={50000} max={100000} now={62000}></ProgressBar>
										  </Row>
										  <Row className={"m-4 setting__list__progressbar"}>
											  <Col className={"d-flex justify-content-between align-items-center"}>
												  <p className={"m-0 p-1"}>신뢰점수</p>
												  <p className={"m-0 p-1"}>75점</p>
											  </Col>
											  <ProgressBar className={"setting__list__progressbar"} animated min={0} max={100} now={75}></ProgressBar>
										  </Row>
									  </Col>
								  </Row>
								  <Row className={"setting__list"}>
									  <Col xs={3}>이름</Col>
									  <Col>{userData.name}</Col>
									  <Col xs={1} className={"setting__list__edit"}>수정</Col>
								  </Row>
								  <Row className={"setting__list"}>
									  <Col xs={3}>별명</Col>
									  <Col>{userData.nickname}</Col>
									  <Col xs={1} className={"setting__list__edit"}>수정</Col>
								  </Row>
								  <Row className={"setting__list"}>
									  <Col xs={3}>이메일</Col>
									  <Col>{userData.email}</Col>
									  <Col xs={1} className={"setting__list__edit"}>수정</Col>
								  </Row>
								  <Row className={"setting__list"}>
									  <Col xs={3}>휴대전화</Col>
									  <Col>{userData.phonenumber}</Col>
									  <Col xs={1} className={"setting__list__edit"}>수정</Col>
								  </Row>
							  </Tab.Pane>
							  <Tab.Pane eventKey="license">
								  자격증명
							  </Tab.Pane>
							  <Tab.Pane eventKey="subscribe">
								  구독
							  </Tab.Pane>
							  <Tab.Pane eventKey="purchase">
								  결제
							  </Tab.Pane>
							  <Tab.Pane eventKey="account">
								  계정
							  </Tab.Pane>
						  </Tab.Content>
					  </Col>
				  </Row>
			  </Tab.Container>



		  </Col>
	  </Container>
	);
}


export default Setting;
