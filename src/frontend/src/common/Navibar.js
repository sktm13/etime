// Navbar.js
// 상단 네비게이션 바
import React from 'react';
import {Col, Row, Navbar, Form, Button, Dropdown, DropdownButton, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import {useCookies} from "react-cookie";
import {setIsLogined} from "../store";
import {useDispatch, useSelector} from "react-redux";

function Navibar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // 쿠키 데이터 로드
    const [cookie, setCookie, removeCookie] = useCookies(['accessToken'])

    // store state 로드
    const isLogined = useSelector(state => state.isLogined)
    const categoryData = useSelector(state => state.categoryData);

    // 로그인 여부 확인
    if (cookie.accessToken) {
        dispatch(setIsLogined(true))
    }
        
        
    // 로그아웃 핸들러
    const handleLogout = () => {
        // axios.post('http://localhost:8000/api/logout')
        //     .then(()=>{
        //         alert('로그아웃 성공');
        //         removeCookie('accesToken');
        //         navigate('/');
        //     })
        //     .catch((err) => {
        //         alert('로그아웃 실패 : ' + err);
        //     })
        removeCookie('accessToken');
        dispatch(setIsLogined(false));
        alert('로그아웃 완료');
        navigate("/");
    }


    return (
        <Container fluid className={"navbar__container"}>
            <Navbar>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Row className='w-100'>
                        <Col></Col>
                        <Col xl={12} xxl={8} className='d-flex justify-content-between align-items-center'>
                            <div className={"d-flex align-items-center"}>
                                <Navbar.Brand href="/">
                                    <h3>Etime</h3>
                                </Navbar.Brand>
                                <DropdownButton variant="light" title={"카테고리"}>
                                    {
                                        categoryData.map((a, i) => (
                                            <Dropdown.Item key={i}>{categoryData[i].name}</Dropdown.Item>
                                        ))
                                    }
                                </DropdownButton>
                            </div>

                            <div className={"d-flex"}>
                                <Form.Group className="mb-2 d-flex align-items-center" controlId="Form.SearchInput">
                                    <Form.Control type="text" placeholder="Search" />
                                </Form.Group>
                                <Button variant="light" type="submit">
                                    🔍
                                </Button>
                            </div>

                            <DropdownButton variant="light" title="더보기">
                                {
                                    isLogined === true ?
                                        <Dropdown.Item onClick={() => {handleLogout()}}>로그아웃</Dropdown.Item> :
                                        <Dropdown.Item onClick={() => {navigate('/pages/login')}}>로그인</Dropdown.Item>
                                }
                                {/*<Dropdown.Item onClick={() => {isLogined? navigate('/pages/mypage') : navigate('/pages/login')}}>마이페이지</Dropdown.Item>*/}
                                {/*<Dropdown.Item onClick={() => {isLogined? navigate('/pages/donate') : navigate('/pages/login')}}>후원</Dropdown.Item>*/}
                                {/*<Dropdown.Item onClick={() => {isLogined? navigate('/pages/payment') : navigate('/pages/login')}}>결제</Dropdown.Item>*/}
                                {/*<Dropdown.Item onClick={() => {isLogined? navigate('/pages/createpost') : navigate('/pages/login')}}>새로운 글 작성</Dropdown.Item>*/}
                                <Dropdown.Item onClick={() => {navigate('/pages/setting')}}>설정</Dropdown.Item>
                                <Dropdown.Item onClick={() => {navigate('/pages/donate')}}>후원</Dropdown.Item>
                                <Dropdown.Item onClick={() => {navigate('/pages/payment')}}>결제</Dropdown.Item>
                                <Dropdown.Item onClick={() => {navigate('/pages/createpost')}}>새로운 글 작성</Dropdown.Item>
                                <Dropdown.Item onClick={() => {navigate('/pages/license')}}>전문가 신청</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        <Col></Col>
                    </Row>
                </Navbar.Collapse>
            </Navbar>
        </Container>

    );
}

export default Navibar;
