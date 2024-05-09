// MakeCategoryList.js
// Sidebar.js에서 리스트를 생성하는 컴포넌트
import { ListGroup } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";

// store 함수 불러오기
import {setCurrentCategory} from "../store";

function MakeCategoryList(props) {
	const dispatch = useDispatch();

	// store 데이터 불러오기
	const categoryData = useSelector((state) => state.categoryData);

	return (
		<ListGroup.Item action onClick={()=> dispatch(setCurrentCategory(props.i))}>
			{categoryData[props.i].name}
		</ListGroup.Item>
	);
}

export { MakeCategoryList };