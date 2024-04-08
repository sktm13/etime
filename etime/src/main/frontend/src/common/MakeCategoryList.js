import { ListGroup } from 'react-bootstrap';

function MakeCategoryList(props) {
	
	return (
		<ListGroup.Item action onClick={null}>
			{props.categoryData.name}
		</ListGroup.Item>
	);
}

export { MakeCategoryList };