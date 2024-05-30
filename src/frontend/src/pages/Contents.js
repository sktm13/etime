// Contents.js
// 메인 콘텐츠
import {Col, Row, Spinner, Button, Placeholder, Card, ButtonGroup, Container, ToggleButton} from 'react-bootstrap';
import { MakeCard } from '../common/MakeCard';
import axios from "axios";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../style/Contents.css';

// store 함수 불러오기
import {setIsDataLoaded, setSortOrder, setIsPostChanged, setPostData} from "../store";
import MakeCarousel from "../common/MakeCarousel";
import * as radios from "react-bootstrap/ElementChildren";

function Contents() {
    const dispatch = useDispatch();

    //store 데이터 불러오기
    const isPostLoaded = useSelector(state => state.isPostLoaded);
    const postData = useSelector(state => state.postData);
    const categoryData = useSelector(state => state.categoryData);

    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: '1', value: '1' },
        { name: '2', value: '2' },
        { name: '3', value: '3' },
        { name: '4', value: '3' },
        { name: '5', value: '3' },
        { name: '6', value: '3' },
        { name: '7', value: '3' },
        { name: '8', value: '3' },
        { name: '9', value: '3' },
    ];

    if (!postData) {
        return <div>post가 존재하지 않음</div>
    }


    return (
        <Container className={"container__maxwidth"}>
            {/* 캐러셀 */}
            <Container className={"w-100"}>
                <MakeCarousel />
            </Container>
            <Col xl={12}>
                <Row>
                    <div className="d-flex justify-content-start">
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
                <Container className={"my-5 d-flex justify-content-center"}>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={'outline-secondary'}
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Container>
            </Col>
        </Container>

        // <Container className={"d-flex justify-content-center"}>
        //     <Col className="Content" xl={12} xxl={8}>
        //         <Row className={"d-flex justify-content-center"}>
        //             {
        //                 isPostLoaded === true &&
        //                 postData.map((a, i) => {
        //                     return (<MakeCard i={i} postData={postData[i]} />)
        //                 })
        //             }
        //         </Row>
        //     </Col>
        // </Container>

    );
}

export default Contents;
