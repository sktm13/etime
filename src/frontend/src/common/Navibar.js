// Navbar.js
// 상단 네비게이션 바
import React from 'react';
import '../style/Navibar.css';

import { Col, Row, Navbar, Form, Button, Dropdown, NavDropdown, Image} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

import logoImage from '../style/image/sample_logo.png';
import { IoSearchOutline } from "react-icons/io5";
import { PiUserCircleLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxPencil2 } from "react-icons/rx";
import { MdOutlinePayment } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";
import { FaIdCardAlt } from "react-icons/fa";

import {useCookies} from "react-cookie";
import {setIsLogined, setCurrentCategory} from "../store";
import {useDispatch, useSelector} from "react-redux";

function Navibar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // 쿠키 데이터 로드
    const [cookie, setCookie, removeCookie] = useCookies(['accessToken'])

    // store 데이터 로드
    const isLogined = useSelector(state => state.isLogined)
    const categoryData = useSelector(state => state.categoryData);

    // 로그아웃 핸들러
    const handleLogout = () => {
        removeCookie('accessToken');
        dispatch(setIsLogined(false));
        alert('로그아웃 완료');
        navigate("/");
    }

    return (
        <Navbar className='navbar'>
            <Navbar.Toggle />
            <Navbar.Collapse className={"d-flex justify-content-center"}>
                <Row className='col-md-12 col-xl-10 col-xxl-8 d-flex align-items-center navbar__list'>
                    <Col className='d-flex justify-content-start d-flex align-items-center'>
                        <Navbar.Brand href="/">
                            <Image src={logoImage} className="logo-image" />
                        </Navbar.Brand>
                    </Col>
                    <Col className='d-flex justify-content-start d-flex align-items-center'>
                        <NavDropdown drop="end" style={{ color: 'black' }}
                                     className="nav-category-button" title="카테고리">
                            <div className="text-center">
                                {categoryData.map((a, i) => (
                                    <NavDropdown.Item key={i} onClick={() => dispatch(setCurrentCategory(i))}
                                                      className="nav-category-Item">
                                        {categoryData[i].name}
                                    </NavDropdown.Item>
                                ))}
                            </div>
                        </NavDropdown>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Form.Group className="form mb-2 d-flex align-items-center" controlId="Form.SearchInput">
                            <Form.Control size="sm" type="text" placeholder="관심있는 내용, 키워드 검색하기" className="search-control" />
                            <Button variant="light" size="lg" type="submit" className="search-Button d-flex justify-content-center d-flex align-items-center">
                                <IoSearchOutline style={{ color: '#212121' }}/>
                            </Button>
                        </Form.Group>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <Col className='d-flex justify-content-end'>
                            <Button variant="light" size="lg" action onClick={() => {isLogined?
                                navigate('/pages/setting') : navigate('/pages/login')}}
                                    className="profile-Button d-flex justify-content-center d-flex align-items-center">
                                <PiUserCircleLight size="30" color='#343232'/>
                            </Button>
                        </Col>
                        <Col className='nav-menu d-flex justify-content-start align-items-center'>
                            <Dropdown>
                                <Dropdown.Toggle className='nav-menu-button' variant="light" size="lg">
                                    <RxHamburgerMenu size="23" color='#343232'/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='nav-menu-Item'>
                                    <div className="text-center">
                                        {isLogined ?
                                            <Dropdown.Item variant="Dark" action onClick={() => {handleLogout()}}>로그아웃</Dropdown.Item> :
                                            <Dropdown.Item variant="Dark" action onClick={() => {navigate('/pages/login')}}>로그인</Dropdown.Item>
                                        }
                                    </div>
                                    <Dropdown.Divider />
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Dropdown.Item variant="light" action onClick={() => {isLogined? navigate('/pages/CreatePost') : navigate('/pages/login')}}>
                                            <RxPencil2 size="17" color='#343232'/>
                                            <span style={{ marginLeft: '0.7rem' }}>글쓰기</span>
                                        </Dropdown.Item>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Dropdown.Item variant="light" action onClick={() => {isLogined? navigate('/pages/donate') : navigate('/pages/login')}}>
                                            <BiDonateHeart size="17" color='#343232'/>
                                            <span style={{ marginLeft: '0.7rem' }}>후원</span>
                                        </Dropdown.Item>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Dropdown.Item variant="light" action onClick={() => {isLogined? navigate('/pages/payment') : navigate('/pages/login')}}>
                                            <MdOutlinePayment size="17" color='#343232'/>
                                            <span style={{ marginLeft: '0.7rem' }}>결제</span>
                                        </Dropdown.Item>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Dropdown.Item variant="light" action onClick={() => {isLogined? navigate('/pages/license') : navigate('/pages/login')}}>
                                            <FaIdCardAlt size="17" color='#343232'/>
                                            <span style={{ marginLeft: '0.7rem' }}>전문가 신청</span>
                                        </Dropdown.Item>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Col>
                </Row>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navibar;
