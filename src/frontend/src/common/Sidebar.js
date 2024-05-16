// Sidebar.js
// 좌측 카테고리 바
import { Col, Row, ListGroup } from 'react-bootstrap';
import { MakeCategoryList  } from './MakeCategoryList';

import {useSelector} from "react-redux";


function Sidebar() {
	// store 데이터 불러오기
	const categoryData = useSelector((state) => state.categoryData);

	return (
		<Col className='Sidebar' xs={2}>
			<Row>
				<ListGroup variant='flush'>
					{
						categoryData.map((a, i) => {
						return (<MakeCategoryList i={i} />)})
					}
				</ListGroup>
			</Row>
		</Col>
	);
}


export default Sidebar;
