// Loading.js
// 로딩중 페이지

import {Container, Spinner} from "react-bootstrap";

function Loading () {
    return (
        <Container className={"d-flex justify-content-center align-items-center"}>
            <div className={"loading__background"}>
                <Spinner animation={"border"}>
                    <span className={"visually-hidden"}>Loading...</span>
                </Spinner>
            </div>
        </Container>
    );
}


export default Loading;
