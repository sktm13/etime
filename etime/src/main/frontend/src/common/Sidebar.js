// Sidebar.js
import { Col, Row, ListGroup } from 'react-bootstrap';
import { MakeCategoryList  } from './MakeCategoryList';



function Sidebar(props) {
	return (
		<Col className='Sidebar' xs={2}>
			<Row>
				<ListGroup variant='flush'>
					{
						props.categoryData.map((a, i) => {
						return (<MakeCategoryList categoryData={props.categoryData[i]} setCurrentCategory={props.setCurrentCategory} i={i} />)})
					}
				</ListGroup>
			</Row>
		</Col>
	);
}


export default Sidebar;
