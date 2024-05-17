// Login.js
// 로그인 페이지
import {Container, Form, Button, Card } from 'react-bootstrap'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from 'axios';


function Login() {
    const navigate = useNavigate();

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');


    // 로그인 버튼
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/login", {
            username: inputEmail,
            password: inputPassword,
        }, {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true // 쿠키 포함
            }
        )
            .then((res) => {
                if (res.data === 'success') {
                    alert('로그인 성공');
                    navigate('/');
                } else {
                    alert('로그인 실패');
                    alert(JSON.stringify(res.data))
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
                <h5>Login</h5>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="userId">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="email"
                            onChange={(e)=>setInputEmail(e.target.value)}
                            value={inputEmail}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="userPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e)=>setInputPassword(e.target.value)}
                            value={inputPassword}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
                <p>No Account?</p>
                <Link to={"/pages/signup"}>Create an new account</Link>
            </Card.Body>
        </Card>
</Container>
    );
}

export default Login;