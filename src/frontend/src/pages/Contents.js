// Contents.js
// 메인 콘텐츠
import {Button, ButtonGroup, Col, Container, Row, ToggleButton} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import '../style/Contents.css';
import {setIsDataLoaded, setIsPostLoaded, setPostData} from "../store";
import {MakeCard} from '../common/MakeCard';
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import MakeCarousel from "../common/MakeCarousel";
import Loading from "../common/Loading";

function Contents() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cookie, setCookie] = useCookies();

    //store 데이터 불러오기
    const isPostLoaded = useSelector(state => state.isPostLoaded);
    const isDataLoaded = useSelector(state => state.isDataLoaded);
    const postData = useSelector(state => state.postData);
    const isLogined = useSelector(state => state.isLogined);

    const [pageSelect, setPageSelect] = useState('1');
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
                params: {page: pageSelect, size: 12}
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
        } else if (!cookie.accessToken) {
            navigate('/pages/login');
        }
    }, [isLogined, cookie.accessToken, dispatch, navigate]);

    if (!isPostLoaded) {
        return <Loading />
    }

    return (
        <Container className={"container__maxwidth"}>
            {/* 캐러셀 */}
            <Container className={"w-100"}>
                <MakeCarousel />
            </Container>
            <Col xl={12}>
                {/*<Row>*/}
                {/*    <div className="d-flex justify-content-start">*/}
                {/*        <ButtonGroup className="sort-button-group" >*/}
                {/*            <Button className="sort-button" variant="light" onClick={() => {}}>최신순</Button>*/}
                {/*            <Button className="sort-button" variant="light" onClick={() => {}}>오래된순</Button>*/}
                {/*        </ButtonGroup>*/}
                {/*    </div>*/}
                {/*</Row>*/}
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
                                checked={pageSelect === radio.value}
                                onChange={(e) => setPageSelect(e.currentTarget.value)}
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
