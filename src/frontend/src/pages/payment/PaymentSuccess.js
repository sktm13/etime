// PaymentSuccess.js
// 결제 성공 페이지

import { useEffect } from "react";
import {Navigate, useNavigate, useSearchParams} from "react-router-dom";
import {Col, Container} from "react-bootstrap";
import {useSelector} from "react-redux";

function PaymentSuccess() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    // store 데이터 불러오기
    const isLogined = useSelector(state => state.isLogined)

    useEffect(() => {
        // 쿼리 파라미터 값이 결제 요청할 때 보낸 데이터와 동일한지 반드시 확인하세요.
        // 클라이언트에서 결제 금액을 조작하는 행위를 방지할 수 있습니다.
        const requestData = {
            orderId: searchParams.get("orderId"),
            amount: searchParams.get("amount"),
            paymentKey: searchParams.get("paymentKey"),
        };

        async function confirm() {
            const response = await fetch("/confirm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            const json = await response.json();

            if (!response.ok) {
                // 결제 실패 비즈니스 로직을 구현하세요.
                navigate(`/fail?message=${json.message}&code=${json.code}`);
                return;
            }

            // 결제 성공 비즈니스 로직을 구현하세요.
        }
        confirm();
    }, []);

    // 로그인 상태가 아닐 때 로그인 페이지로 이동
    if (!isLogined) {
        return <Navigate to={'/pages/login'} />
    }

    return (
        <Container className={"d-flex justify-content-center"}>
            <Col xs={10}>
                <div className="result wrapper">
                    <div className="box_section">
                        <h2>
                            결제 성공
                        </h2>
                        <p>{`주문번호: ${searchParams.get("orderId")}`}</p>
                        <p>{`결제 금액: ${Number(
                            searchParams.get("amount")
                        ).toLocaleString()}원`}</p>
                        <p>{`paymentKey: ${searchParams.get("paymentKey")}`}</p>
                    </div>
                </div>
            </Col>
        </Container>
    );
}

export default PaymentSuccess;