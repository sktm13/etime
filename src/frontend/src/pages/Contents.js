// Contents.js
// 메인 콘텐츠
import {Col, Row, Spinner, Button, Placeholder, Card} from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { MakeCard } from '../common/MakeCard';
import axios from "axios";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../style/Contents.css';

// store 함수 불러오기
import {setIsDataLoaded, setSortOrder, setIsPostChanged, setPostData} from "../store";

function Contents() {
    const dispatch = useDispatch();

    //store 데이터 불러오기
    const isPostLoaded = useSelector(state => state.isPostLoaded);
    const postData = useSelector(state => state.postData);
    const categoryData = useSelector(state => state.categoryData);


    if (!isPostLoaded) {
        return (
            <>
                <Card>
                    <Card.Img variant="top" src="http://via.placeholder.com/320x180" />
                    <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={6} />
                        </Placeholder>
                    </Card.Body>
                </Card>
            </>
        )
    }

    if (!postData) {
        return <div>post가 존재하지 않음</div>
    }


    return (
<Col>
    <Row>
    <div id="main" className="col-4 d-flex justify-content-start">
    <ButtonGroup className="sort-button-group" >
                    <Button className="sort-button" variant="light" onClick={() => {}}>최신순</Button>
                    <Button className="sort-button" variant="light" onClick={() => {}}>오래된순</Button>
                </ButtonGroup>
                </div>
    </Row>
    <Row className="Content justify-content-center">
        {
            isPostLoaded === true &&
            postData.map((a, i) => {
                return  <>
                <MakeCard i={i} postData={postData[i]} categoryData={categoryData}/>
            </>
            })   
        }
    </Row>
</Col>
    );
}

export default Contents;
