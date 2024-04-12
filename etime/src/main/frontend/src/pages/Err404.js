// Err404.js
// 설정되지 않은 페이지 진입 시 출력
import { Container } from 'react-bootstrap'

function Err404 () {
    return (
<Container className="centered">
    <h3>404 Not Found</h3>
    <p>에러페이지임</p>
</Container>
    )
}

export default Err404;