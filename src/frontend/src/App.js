import './style/App.css'
import { Container, Row } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import LoadData from "./common/LoadData";
import Navibar from "./common/Navibar";
import Sidebar from "./common/Sidebar";
import MakeComment from "./common/MakeComment";
import Contents from "./pages/Contents";
import Post from "./pages/post/Post";
import CreatePost from "./pages/post/CreatePost";
import EditPost from "./pages/post/EditPost";
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Donate from "./pages/Donate";
import Payment from "./pages/Payment";
import Err404 from "./pages/Err404";


function App() {
    return (
<Container>
    {/* 데이터 로드 */}
    <LoadData />
    {/* 네비게이션 바 */}
    <Navibar />
    <Row style={{width: '100rem'}}>
        {/* 사이드 바 */}
        <Routes>
            <Route path='/' element={<Sidebar />} />
        </Routes>
        {/* 컨텐츠 */}
        <Routes>
            <Route path="/" element={<Contents />} />
            <Route path="/pages/post/:postId" element={<Post />}>
                {/*<Route path="/pages/post/:postId/" element={<MakeComment />} />*/}
            </Route>
            <Route path="/pages/createpost" element={<CreatePost />}/>
            <Route path="/pages/editpost/:postId" element={<EditPost />}/>
            <Route path="/pages/mypage" element={<Mypage />} />
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
