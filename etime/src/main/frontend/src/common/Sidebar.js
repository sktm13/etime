// Sidebar.js
import { Col, Row, Tab, ListGroup } from 'react-bootstrap';
import { MakeCategoryList  } from './MakeCategoryList';


function Sidebar(props) {
	return (
		<Col className='Sidebar' xs={2}>
			<Tab.Container defaultActiveKey="#link1">
				<Row>
					<ListGroup variant='flush'>
						{
							props.categoryData.map((a, i) => {
							return (<MakeCategoryList categoryData={props.categoryData[i]} />)})
						}
					</ListGroup>
				</Row>
			</Tab.Container>
		</Col>
	);
}


export default Sidebar;
