// Contents.js
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { MakeCard } from '../common/MakeCard';


function Contents(props) {

    const params = useParams();

    return (
<Col className="Content">
    <Row>
        {
            props.postData.map((a, i) => {
                return (<MakeCard postData={props.postData[i]} userData={props.userData[i]} />)})
        }
    </Row>
</Col>
    );
}


export default Contents;
