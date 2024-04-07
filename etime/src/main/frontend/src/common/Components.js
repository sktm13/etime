import { useNavigate } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';

function MakeCard(props) {
    const navigate = useNavigate();

    return (
    <Card>
        <Card.Link href={props.cardData.link}
            onClick={() => {navigate(props.cardData.navigate)}}>
            <Card.Img variant="top" src={props.cardData.thumnailImg} />
            <Card.Body>
                <Card.Title>{props.cardData.title}</Card.Title>
                <Card.Text>{props.cardData.text}</Card.Text>
            </Card.Body>
        </Card.Link>
    </Card>    
    );
}


function MakeCategoryList(props) {
	
	return (
		<ListGroup.Item action onClick={null}>
			{props.categoryData.name}
		</ListGroup.Item>
	);
}


export { MakeCard, MakeCategoryList };