// Navbar.js
// 상단 네비게이션 바
import React from 'react';
import '../style/Navibar.css';

import { Nav, Container, Col, Row, Navbar, Form, Button, Dropdown, DropdownButton, NavDropdown, Image} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

import logoImage from '../style/image/sample_logo.png';
import Avatar from '../style/image/Avatar.png';

import { IoSearchOutline } from "react-icons/io5";

import { RxPencil2 } from "react-icons/rx";
import { MdOutlinePayment } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";
import { TbCategory } from "react-icons/tb";
import { VscKebabVertical } from "react-icons/vsc";

import { useState } from 'react';
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
    const isCategoryLoaded = useSelector(state => state.isCategoryLoaded);

    // 로그인 여부 확인
    if (cookie.accessToken) {
        dispatch(setIsLogined(true))
    }
        
        
    // 로그아웃 핸들러
    const handleLogout = () => {
        removeCookie('accessToken');
        dispatch(setIsLogined(false));
        alert('로그아웃 완료');
        navigate("/");
    }


    return (
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="/">
                <Image src={logoImage} className="logo-image me-2" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto align-items-center justify-content-between nav-control">
                    <NavDropdown
                        drop="end"
                        style={{ color: 'black' }}
                        className="nav-category-button"
                        title={<><TbCategory className="me-2" size={24} style={{ paddingBottom: '1px' }} />카테고리</>}
                        
                    >
                        <div className="text-center">
                            {categoryData.map((a, i) => (
                                <NavDropdown.Item key={i} onClick={() => dispatch(setCurrentCategory(i))}
                                                className="nav-category-Item">
                                    {categoryData[i].name}
                                </NavDropdown.Item>
                            ))}
                        </div>
                    </NavDropdown>
                
                <Form.Group className="form me-2 mb-2 me-lg-3 d-flex align-items-center" controlId="Form.SearchInput">
                            <Form.Control size="lg" type="text" placeholder="관심있는 내용, 키워드 검색하기" className="search-control" />
                            <Button variant="light" size="lg" type="submit" 
                                className="search-Button d-flex justify-content-center d-flex align-items-center">
                                <IoSearchOutline style={{ color: '#212121' }}/>
                            </Button>
                </Form.Group>
                
                    <div className="d-flex">
                            <Button variant="light" className="navi-Button me-1" onClick={() => navigate("/pages/createPost")}>
                                <RxPencil2 size="20" color='#343232'/>
                            </Button>
                            <Button variant="light" className="navi-Button me-1" onClick={() => navigate("/pages/donate")}>
                                <BiDonateHeart size="20" color='#343232'/>
                            </Button>
                            <Button variant="light" className="navi-Button me-1" onClick={() => navigate("/pages/payment")}>
                                <MdOutlinePayment size="20" color='#343232'/>
                            </Button>
                    </div>
                        <Button variant="light" className="profile-Button me-1"
                                onClick={() => {isLogined ? navigate('/pages/setting') : navigate('/pages/login')}}>
                        <Image src={Avatar} style={{ width: '32px', height: '32px' }} alt="Profile" />
                        </Button>

                        <DropdownButton variant="outline-light" className="nav-menu-button" id="dropdown-basic-button" 
                            size='sm' title={<VscKebabVertical color='black' />} drop="end">
                            {
                                isLogined === true ?
                                    <Dropdown.Item className="nav-menu-Item" onClick={() => {handleLogout()}}>로그아웃</Dropdown.Item> :
                                    <Dropdown.Item className="nav-menu-Item" onClick={() => {navigate('/pages/login')}}>로그인</Dropdown.Item>
                            }
                            <Dropdown.Item className="nav-menu-Item" onClick={() => {navigate('/pages/setting')}}>설정</Dropdown.Item>
                            <Dropdown.Item className="nav-menu-Item" onClick={() => {navigate('/pages/license')}}>전문가 신청</Dropdown.Item>
                        </DropdownButton>                     
                </Nav>
            </Navbar.Collapse>
            
        </Container>
    </Navbar>
    );
}

export default Navibar;
