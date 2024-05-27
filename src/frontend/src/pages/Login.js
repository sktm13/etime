// Login.js
// 로그인 페이지
import {Container, Form, Button, Card } from 'react-bootstrap'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from 'axios';
import {useCookies} from "react-cookie";
import {setIsLogined} from "../store";
import {useDispatch} from "react-redux";


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [cookie, setCookie] = useCookies(['accessToken'])

    // state 생성
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');



    // 로그인 버튼
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/member/login", {
            username: inputEmail,
            password: inputPassword,
        }, {
            headers: {'Content-Type': 'multipart/form-data'},
            }
        )
            .then((res) => {
                if (res.data.accessToken) {
                    alert('로그인 성공');
                    setCookie('accessToken', res.data.accessToken, {
                        path: "/",
                        maxAge: 3600
                    });
                    navigate('/');
                } else {
                    alert('로그인 실패 : ' + res.data.message);
                    console.log(res.data);
                }
            })
            .catch((err) => {
                if (err.response && err.response.data && err.response.data.error ) {
                    alert('로그인 실패 : ' + err.response.data.error);
                } else {
                    alert('로그인 실패 : 알 수 없는 오류')
                }
            });
    };


    return (
<Container className="centered" >
        <Card>
            <Card.Header>
                <h5>로그인</h5>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="userId">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="email"
                            onChange={(e)=>setInputEmail(e.target.value)}
                            value={inputEmail}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="userPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e)=>setInputPassword(e.target.value)}
                            value={inputPassword}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        로그인
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
                <p>계정이 없나요?</p>
                <Link to={"/pages/signup"}>새로운 계정 만들기</Link>
            </Card.Body>
        </Card>
</Container>
    );
}

export default Login;