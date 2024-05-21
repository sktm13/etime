// Navbar.js
// 상단 네비게이션 바
import React from 'react';
import { Col, Row, Navbar, Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import {useCookies} from "react-cookie";
import {setIsLogined} from "../store";
import {useSelector} from "react-redux";

function Navibar() {

    const navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies(['accessToken'])
    
    // store state 로드
    const isLogined = useSelector(state => state.isLogined)

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
        setIsLogined(false);
        alert('로그아웃 완료');
    }


    return (
        <Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Row className='w-100'>
                    <Col className='d-flex justify-content-start d-flex align-items-center'>
                        <Navbar.Brand href="/">
                            <h3>Etime</h3>
                        </Navbar.Brand>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                    <Form.Group className="mb-2 d-flex align-items-center" controlId="Form.SearchInput">
                        <Form.Control type="text" placeholder="Search" />
                    </Form.Group>
                    <Button variant="light" type="submit">
                        🔍
                    </Button>
                    </Col>
                    <Col className='d-flex justify-content-end align-items-center'>
                        <DropdownButton variant="light" title="More">
                            {
                                isLogined === true ?
                                    <Dropdown.Item onClick={() => {handleLogout()}}>로그아웃</Dropdown.Item> :
                                    <Dropdown.Item onClick={() => {navigate('/pages/login')}}>로그인</Dropdown.Item>
                            }
                            <Dropdown.Item onClick={() => {navigate('/pages/mypage')}}>마이페이지</Dropdown.Item>
                            <Dropdown.Item onClick={() => {navigate('/pages/donate')}}>후원</Dropdown.Item>
                            <Dropdown.Item onClick={() => {navigate('/pages/payment')}}>결제</Dropdown.Item>
                            <Dropdown.Item onClick={() => {navigate('/pages/createpost')}}>새로운 글 작성</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navibar;
