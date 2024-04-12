// MakeCategoryList.js
// Sidebar.js에서 리스트를 생성하는 컴포넌트
import { ListGroup } from 'react-bootstrap';

function MakeCategoryList(props) {
	
	return (
		<ListGroup.Item action onClick={()=> props.setCurrentCategory(props.i)}>
			{props.categoryData.name}
		</ListGroup.Item>
	);
}

export { MakeCategoryList };