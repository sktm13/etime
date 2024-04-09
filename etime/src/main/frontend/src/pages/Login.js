// Login.js
// 로그인 페이지
import { Container, Form, Button } from 'react-bootstrap'


function Login(props) {
    return (
<Container className="centered" >
    <h1>Login</h1>
    <br />
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>props.setIdInput(e.target.value)}/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>props.setPasswordInput(e.target.value)}/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit" onClick={()=>AccountAlert(props.idInput, props.passwordInput)}>
        Submit
      </Button>
    </Form>
</Container>
    );
}


function AccountAlert(id, password) {
    alert('id = ' + {id})
    alert('password = ' + {password})
}


export default Login;