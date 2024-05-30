import './style/App.css'
import {Col, Container, Row} from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import {useSelector} from "react-redux";

import LoadData from "./common/LoadData";
import Loading from "./common/Loading";
import Navibar from "./common/Navibar";
import Contents from "./pages/Contents";
import Post from "./pages/post/Post";
import CreatePost from "./pages/post/CreatePost";
import EditPost from "./pages/post/EditPost";
import Setting from "./pages/user/Setting";
import Login from "./pages/user/Login";
import SignUp from "./pages/user/SignUp";
import Donate from "./pages/Donate";
import Payment from "./pages/payment/Payment";
import PaymentSucess from "./pages/payment/PaymentSuccess";
import PaymentFail from "./pages/payment/PaymentFail";
import License from "./pages/License";
import Err404 from "./pages/Err404";
import MakeCarousel from './common/MakeCarousel';


function App() {
    // store 데이터 불러오기
    const isDataLoaded = useSelector(state => state.isDataLoaded)

    return (
<Container fluid className={"main"}>

    {/* 데이터 로드 */}
    <LoadData />
    { !isDataLoaded && <Loading /> }
    {/* 네비게이션 바 */}
    <Navibar />
    <Row className={"main__body"}>
        {/* 사이드 바 */}
        {/*<Routes>*/}
            {/*<Route path='/' element={<Sidebar />} />*/}
        {/*</Routes>*/}
        {/* 컨텐츠 */}
        <Routes>
            <Route path="/" element={<Contents />} />
            <Route path="/pages/post/:postId" element={<Post />}>
                {/*<Route path="/pages/post/:postId/" element={<MakeComment />} />*/}
            </Route>
            <Route path="/pages/createpost" element={<CreatePost />}/>
            <Route path="/pages/editpost/:postId" element={<EditPost />}/>
            <Route path="/pages/setting" element={<Setting />} />
            <Route path="/pages/login" element={<Login />}/>
            <Route path="/pages/signup" element={<SignUp />}/>
            <Route path="/pages/donate" element={<Donate />}/>
            <Route path="/pages/payment" element={<Payment />}/>
            <Route path="/pages/payment/success" element={<PaymentSucess />}/>
            <Route path="/pages/payment/fail" element={<PaymentFail />}/>
            <Route path="/pages/license" element={<License />} />
            <Route path="*" element={<Err404 />} />
        </Routes>
    </Row>
</Container>
    );
}


export default App;
