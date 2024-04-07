// Sidebar.js
import { Col, Row, Tab, ListGroup } from 'react-bootstrap';

// 테스트용 임시 데이터입니다 나중에 삭제하세요
// This is temporary test data. Please delete it later
import { categoryData } from '../pages/data';

function Sidebar() {
	return (
		<Col className='Sidebar' xs={2}>
			<Tab.Container defaultActiveKey="#link1">
				<Row>
					<ListGroup variant='flush'>
						{
							categoryData.map((a, i) => {
							return (<MakeCategoryList categoryData={categoryData[i]} />)})
						}
					</ListGroup>
				</Row>
			</Tab.Container>
		</Col>
	);
}


function MakeCategoryList(props) {
	
	return (
		<ListGroup.Item action onClick={null}>
			{props.categoryData.name}
		</ListGroup.Item>
	);
}


export default Sidebar;
