// donate.js
// 후원 페이지
import { Container } from 'react-bootstrap';
import {useSelector} from "react-redux";
import {Navigate, redirect} from "react-router-dom";

function Donate() {

    // store 데이터 불러오기
    const isLogined = useSelector(state => state.isLogined)

    // 로그인 상태가 아닐 때 로그인 페이지로 이동
    if (!isLogined) {
        return <Navigate to={'/pages/login'} />
    }

    return (
        <Container className="centered">
            <h3>Donate</h3>
            <p>후원페이지임</p>
        </Container>
    )
}

export default Donate;