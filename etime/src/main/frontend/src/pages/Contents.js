// Contents.js
import { Col, Row } from 'react-bootstrap';
import { MakeCard } from '../common/Components';

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


export default Contents;
