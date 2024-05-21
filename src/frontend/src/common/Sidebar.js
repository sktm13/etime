// Sidebar.js
// 좌측 카테고리 바
import {Col, Row, ListGroup, Placeholder} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentCategory} from "../store";


function Sidebar() {
	const dispatch = useDispatch();

	// store 데이터 불러오기
	const categoryData = useSelector(state => state.categoryData);
	const isCategoryLoaded = useSelector(state => state.isCategoryLoaded);

	// placeholder용 배열
	const categoryArr = [1,2,3,4,5,6,7,8,9,10];


	if (!isCategoryLoaded) {
		return (
			<Col className='Sidebar' xs={2}>
				<Row>
					<ListGroup variant='flush'>
						{
							categoryArr.map((a, i) => {
								return (
									<ListGroup.Item>
										<Placeholder as="p" animation="glow">
											<Placeholder xs={12} />
										</Placeholder>
									</ListGroup.Item>
								)
							})
						}
					</ListGroup>
				</Row>
			</Col>
		)
	}

	return (
		<Col className='Sidebar' xs={2}>
			<Row>
				<ListGroup variant='flush'>
					{
						categoryData.map((a, i) => {
							return (
								<ListGroup.Item action onClick={()=> dispatch(setCurrentCategory(i))}>
									{categoryData[i].name}
								</ListGroup.Item>
							)})
					}
				</ListGroup>
			</Row>
		</Col>
	);
}


export default Sidebar;
