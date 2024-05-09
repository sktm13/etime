// SignUp.js
// 회원가입 페이지
import {Container, Form, Button, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useState} from "react";


function SignUp() {
    const navigate = useNavigate();

    const [inputId, setInputId] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputNickname, setInputNickname] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    // 회원가입 버튼
    const handleSignUp = () => {
        const currentTime = new Date().toISOString();

        axios.post("http://localhost:8080/api/users", {
            login_id: inputId,
            name: inputName,
            nick_name: inputNickname,
            password: inputPassword,
        })
            .then(() => {
                alert('회원가입 성공');
                navigate('/');
            })
            .catch(() => {
                alert('회원가입 실패');
            });
    };

    return (
        <Container className="centered" >
            <Card>
                <Card.Header>
                    <h5>Sign Up</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>New Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setInputId(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e)=>setInputPassword(e.target.value)}/>
                        </Form.Group>
                        <br/>
                        <br/>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="username" placeholder="Password" onChange={(e)=>setInputName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control type="username" placeholder="Password" onChange={(e)=>setInputNickname(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={()=>handleSignUp()}>
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default SignUp;