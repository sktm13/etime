// Contents.js
// 메인 콘텐츠
import {Col, Row, Spinner, Button, Placeholder, Card} from 'react-bootstrap';
import { MakeCard } from '../common/MakeCard';
import axios from "axios";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

// store 함수 불러오기
import {setIsDataLoaded, setSortOrder, setIsPostChanged, setPostData} from "../store";

function Contents() {
    const dispatch = useDispatch();

    //store 데이터 불러오기
    const isPostLoaded = useSelector(state => state.isPostLoaded);
    const postData = useSelector(state => state.postData);

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
<Col className="Content">
    <Row>
        <Col>
            <Button onClick={() => {}}>최신순</Button>
        </Col>
        <Col>
            <Button onClick={() => {}}>오래된순</Button>
        </Col>
    </Row>
    <Row>
        {
            isPostLoaded === true &&
            postData.map((a, i) => {
                return (<MakeCard i={i} postData={postData[i]} />)
            })
        }
    </Row>
</Col>
    );
}


export default Contents;
