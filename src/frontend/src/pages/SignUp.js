// Login.js
// 로그인 페이지
import {Container, Form, Button, Card} from 'react-bootstrap'


function Login(props) {
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
                            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>props.setIdInput(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e)=>props.setPasswordInput(e.target.value)}/>
                        </Form.Group>
                        <br/>
                        <br/>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Password" onChange={(e)=>props.setUsernameInput(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={()=>AccountAlert(props.idInput, props.passwordInput)}>
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}


function AccountAlert(id, password) {
    alert('id = ' + {id})
    alert('password = ' + {password})
}


export default Login;