// import { useEffect, useState} from "react";
// import axios from "axios";
import './style/App.css'
import React from "react"
import { Container, Row } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";

import Navibar from "./common/Navibar"
import Sidebar from "./common/Sidebar"
import Contents from "./pages/Contents"
import Post from "./pages/Post"
import Mypage from "./pages/Mypage"
import Err404 from "./pages/Err404"


function App() {
    return (
<Container fluid>
    {/* 네비게이션 바 */}
    <Navibar />
    <Row className='Main'>
        {/* 사이드 바 */}
        <Routes>
            <Route path='/' element={<Sidebar />} />
        </Routes>
        
        {/* 컨텐츠 */}
        <Routes>
            <Route path="/" element={<Contents />} />
            <Route path="/pages/post" element={<Post />} />
            <Route path="/pages/mypage" element={<Mypage />} />
            <Route path="*" element={<Err404 />} />
        </Routes>
    </Row>
</Container>
    );
}




export default App;
