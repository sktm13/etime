// Contents.js
// 메인 콘텐츠
import {Col, Row, Spinner, Button, Placeholder, Card, Container} from 'react-bootstrap';
import { MakeCard } from '../common/MakeCard';
import axios from "axios";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

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
        <Container className={"d-flex justify-content-center"}>
            <Col className="Content" xl={12} xxl={8}>
                <Row className={"d-flex justify-content-center"}>
                    {
                        isPostLoaded === true &&
                        postData.map((a, i) => {
                            return (<MakeCard i={i} postData={postData[i]} />)
                        })
                    }
                </Row>
            </Col>
        </Container>

    );
}


export default Contents;
