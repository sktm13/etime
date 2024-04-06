// import { useEffect, useState} from "react";
// import axios from "axios";
import './style/App.css'
import React from "react"
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navibar from "./common/Navibar"
import Sidebar from "./common/Sidebar"
import Contents from "./pages/Contents"
import Post from "./pages/Post"


function App() {
    return (
<>
    <BrowserRouter>
        {/* 라우터 경로 설정 */}
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
                    <Route path="/post" element={<Post />} />
                </Routes>
            </Row>
        </Container>
    </BrowserRouter>
</>
    );
}




export default App;
