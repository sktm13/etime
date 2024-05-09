// Login.js
// 로그인 페이지
import {Container, Form, Button, Card } from 'react-bootstrap'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from 'axios';


function Login() {
    const navigate = useNavigate();

    const [inputId, setInputId] = useState('');
    const [inputPassword, setInputPassword] = useState('');


    // 로그인 버튼
    const handleSignUp = () => {
        axios.post("http://localhost:8080/api/member/login", {
            login_id: inputId,
            password: inputPassword,
        })
            .then(() => {
                alert('로그인 성공');
                navigate('/');
            })
            .catch(() => {
                alert('로그인 실패');
            });
    };



    // const handleInputTest = () => {
    //     console.log(inputId);
    //     console.log(inputPassword);
    // }


    return (
<Container className="centered" >
        <Card>
            <Card.Header>
                <h5>Sign In</h5>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>user Id</Form.Label>
                        <Form.Control type="id" placeholder="id" onChange={(e)=>setInputId(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=>setInputPassword(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={()=> handleSignUp()}>
                        Sign in
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