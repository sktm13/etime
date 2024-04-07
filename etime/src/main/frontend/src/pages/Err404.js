import { Container } from 'react-bootstrap'

function Err404 () {
    return (
<Container className="centered">
    <h3 className='rainbow-text'>404 Not Found</h3>
    <p className='rainbow-text'>에러페이지임</p>
</Container>
    )
}

export default Err404;