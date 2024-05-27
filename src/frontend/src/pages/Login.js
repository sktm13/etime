// Login.js
// 로그인 페이지
import {Container, Form, Button, Card, Row, Image} from 'react-bootstrap'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from 'axios';
import {useCookies} from "react-cookie";
import {setIsLogined} from "../store";
import {useDispatch} from "react-redux";

// 로그인 이미지
import googleLogin from '../style/image/login_google.png'
import naverLogin from '../style/image/login_naver.png'
import kakaoLogin from '../style/image/login_kakao.png'


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [cookie, setCookie] = useCookies(['accessToken'])

    // state 생성
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [showLoginForm, setShowLoginForm] = useState(false);



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
<Container className="login__background" >
    <Container className={"login__box"}>
        <h1 className={"login__box__header"}><b>ETime</b></h1>
        <h5><b>믿을 수 있는 커뮤니티</b></h5>

        {
            !showLoginForm
                ?
                <div>
                    <div className="login__box__images">
                        <Image src={googleLogin} className={"login__box__image"}/>
                        <Image src={naverLogin} className={"login__box__image"}/>
                        <Image src={kakaoLogin} className={"login__box__image"}/>
                    </div>
                    <h6 className={"login__box__footer"} onClick={() => setShowLoginForm(true)}><b>이메일로 로그인</b></h6>
                </div>
                :
                <div className={"login__box__form"}>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className={"login__form__group"} controlId="userId">
                            <Form.Label className={"login__form__label"}>이메일</Form.Label>
                            <Form.Control
                                className={"login__form__input"}
                                type="email"
                                placeholder="email"
                                onChange={(e) => setInputEmail(e.target.value)}
                                value={inputEmail}
                            />
                        </Form.Group>
                        <Form.Group className={"login__form__group"} controlId="userPassword">
                            <Form.Label className={"login__form__label"}>비밀번호</Form.Label>
                            <Form.Control
                                className={"login__form__input"}
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setInputPassword(e.target.value)}
                                value={inputPassword}
                            />
                        </Form.Group>
                        <div className={"login__box__button"}>
                            <Button variant="primary" type="submit">
                                로그인
                            </Button>
                        </div>
                    </Form>
                    <div className={"login__box__register"}>
                        <p>계정이 없나요?</p>
                        <Link to={"/pages/signup"}>새로운 계정 만들기</Link>
                    </div>
                    <h6 className={"login__box__footer"} onClick={() => setShowLoginForm(false)}><b>돌아가기</b></h6>
                </div>
        }


    </Container>

</Container>
    )
        ;
}

export default Login;