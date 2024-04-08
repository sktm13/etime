import { ListGroup } from 'react-bootstrap';

function MakeCategoryList(props) {
	
	return (
		<ListGroup.Item action onClick={()=> props.setCurrentCategory(props.i)}>
			{props.categoryData.name}
		</ListGroup.Item>
	);
}

export { MakeCategoryList };