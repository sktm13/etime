// PaymentFail.js
// 결제 실패 페이지

import {Navigate, useSearchParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import React from "react";

function PaymentFail() {
    const [searchParams] = useSearchParams();

    // store 데이터 불러오기
    const isLogined = useSelector(state => state.isLogined)

    // 로그인 상태가 아닐 때 로그인 페이지로 이동
    if (!isLogined) {
        return <Navigate to={'/pages/login'} />
    }

    return (
        <Container className={"container__maxwidth"}>
            <Col lg={12} xl={8} xxl={6}>
                <Row className={"post__header align-items-center"}>
                    <h5>결제 완료</h5>
                </Row>
                <div className="result wrapper">
                    <div className="box_section">
                        <h2>
                            결제 실패
                        </h2>
                        <p>{`에러 코드: ${searchParams.get("code")}`}</p>
                        <p>{`실패 사유: ${searchParams.get("message")}`}</p>
                    </div>
                </div>
            </Col>
        </Container>
    );
}

export default PaymentFail;