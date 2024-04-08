import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function MakeCard(props) {
    const navigate = useNavigate();

    return (
    <Card>
        <Card.Link onClick={() => {navigate("./pages/post/" + (props.postData.id))}}>
            <Card.Img variant="top" src={props.postData.thumnail} />
            <Card.Body>
                <Card.Title>{props.postData.title}</Card.Title>
                <Card.Text>{props.postData.summary}</Card.Text>
            </Card.Body>
        </Card.Link>
    </Card>    
    );
}

export { MakeCard };