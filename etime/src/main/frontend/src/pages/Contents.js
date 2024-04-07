// Contents.js
import { Col, Row, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// 테스트용 임시 데이터입니다 나중에 삭제하세요
// This is temporary test data. Please delete it later
import { cardData } from "./data";

function Contents() {
    return (
        <Col className="Content">
            <Row>
                {
                    cardData.map((a, i) => {
                    return (<MakeCard cardData={cardData[i]} />)})
                }
            </Row>
        </Col>
    );
}


function MakeCard(props) {
    const navigate = useNavigate();

    return (
    <Card>
        <Card.Link href={props.cardData.link}
            onClick={() => {navigate(props.cardData.navigate)}}>
            <Card.Img variant="top" src={props.cardData.img} />
            <Card.Body>
                <Card.Title>{props.cardData.title}</Card.Title>
                <Card.Text>{props.cardData.text}</Card.Text>
            </Card.Body>
        </Card.Link>
    </Card>    
    );
} 


export default Contents;
