// Contents.js
// 메인 콘텐츠
import {Col, Row, Button, ButtonGroup, Container, ToggleButton} from 'react-bootstrap';
import { MakeCard } from '../common/MakeCard';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../style/Contents.css';

// store 함수 불러오기
import MakeCarousel from "../common/MakeCarousel";
import axios from "axios";
import {useCookies} from "react-cookie";
import {setIsPostLoaded, setPostData, setIsDataLoaded} from "../store";
import {useNavigate} from "react-router-dom";

function Contents() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cookie, setCookie] = useCookies();

    //store 데이터 불러오기
    const isPostLoaded = useSelector(state => state.isPostLoaded);
    const isDataLoaded = useSelector(state => state.isDataLoaded);
    const postData = useSelector(state => state.postData);
    const categoryData = useSelector(state => state.categoryData);
    const isLogined = useSelector(state => state.isLogined);

    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: '1', value: '1' },
        { name: '2', value: '2' },
        { name: '3', value: '3' },
        { name: '4', value: '4' },
        { name: '5', value: '5' },
        { name: '6', value: '6' },
        { name: '7', value: '7' },
        { name: '8', value: '8' },
        { name: '9', value: '9' },
    ];

    // 서버에서 Post 데이터 로드
    useEffect(() => {
        if (isLogined) {
            axios.get("http://localhost:8080/api/posts/list", {
                headers: {Authorization: `Bearer ${cookie.accessToken}`},
                params: {page: 1, size: 10}
            })
                .then((res) => {
                    if (!res.data.error) {
                        dispatch(setPostData(res.data));
                        dispatch(setIsPostLoaded(true));
                        dispatch(setIsDataLoaded(true));
                    }
                    else {
                        console.error(res.data.error);
                        dispatch(setIsPostLoaded(false))
                        if (res.data.error === "ERROR_ACCESS_TOKEN") {
                            navigate('/pages/login');
                        }
                    }
                })
                .catch((err) => {
                    console.log(err)
                    dispatch(setIsPostLoaded(false));
                });
        } else {
            console.log("로그인안됨")
        }
    }, []);


    if (!isPostLoaded) {
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
                        isPostLoaded &&
                        postData.dtoList.map((a, i) => {
                            return  <MakeCard i={i} postData={postData.dtoList[i]}/>
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
    );
}

export default Contents;
