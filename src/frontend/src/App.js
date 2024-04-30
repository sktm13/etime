import './style/App.css'
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

import Navibar from "./common/Navibar";
import Sidebar from "./common/Sidebar";
import MakeComment from "./common/MakeComment";
import Contents from "./pages/Contents";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Donate from "./pages/Donate";
import Payment from "./pages/Payment";
import Err404 from "./pages/Err404";

// 테스트용 임시 데이터입니다 나중에 삭제하세요
// This is temporary test data. Please delete it later
import { postData, categoryData, userData, userPostData, commentData } from "./pages/data.js";


function App() {

    const [currentCategory, setCurrentCategory] = useState(0);

    return (
<Container fluid>
    {/* 네비게이션 바 */}
    <Navibar />
    
    <Row className='Main'>
        {/* 사이드 바 */}
        <Routes>
            <Route path='/' element={<Sidebar categoryData={categoryData} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>} />
        </Routes>
        {/* 컨텐츠 */}
        <Routes>
            <Route path="/" element={<Contents postData={postData} userData={userData} currentCategory={currentCategory}/>} />
            <Route path="/pages/post/:postId" element={<Post postData={postData} userData={userData} commentData={commentData} />}>
                <Route path="/pages/post/:postId/" element={<MakeComment commentData={commentData} postData={postData}/>} />
            </Route>
            <Route path="/pages/createpost" element={<CreatePost />}/>
            <Route path="/pages/mypage" element={<Mypage postData={userPostData} userData={userData}/>} />
            <Route path="/pages/login" element={<Login />}/>
            <Route path="/pages/signup" element={<SignUp />}/>
            <Route path="/pages/donate" element={<Donate />}/>
            <Route path="/pages/payment" element={<Payment />}/>
            <Route path="*" element={<Err404 />} />
        </Routes>
    </Row>
</Container>
    );
}


export default App;
