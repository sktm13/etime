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

// 테스트용 임시 데이터입니다 나중에 삭제하세요
// This is temporary test data. Please delete it later
import { postData, categoryData, userData, userPostData } from "./pages/data.js";


function App() {

    return (
<Container fluid>
    {/* 네비게이션 바 */}
    <Navibar />
    <Row className='Main'>
        {/* 사이드 바 */}
        <Routes>
            <Route path='/' element={<Sidebar categoryData={categoryData}/>} />
        </Routes>
        {/* 컨텐츠 */}
        <Routes>
            <Route path="/" element={<Contents postData={postData} userData={userData} />} />
            <Route path="/pages/post/:postId" element={<Post postData={postData} userData={userData} />} />
            <Route path="/pages/mypage" element={<Mypage postData={userPostData} userData={userData}/>} />
            <Route path="*" element={<Err404 />} />
        </Routes>
    </Row>
</Container>
    );
}




export default App;
