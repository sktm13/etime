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
    const isPostChanged = useSelector(state => state.isPostChanged);
    const postData = useSelector(state => state.postData);
    const isLogined = useSelector(state => state.isLogined);

    const [pageSelect, setPageSelect] = useState('1');

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
    }, [isLogined, cookie.accessToken, dispatch, navigate, pageSelect, isPostChanged]);

    // Post 데이터가 로드되있지 않다면, 로딩 화면 출력
    if (!isPostLoaded) {
        return <Loading />
    }

    // 페이지 버튼 생성
    const generatePageButtons = () => {
        const buttons = [];

        // 첫 페이지와 이전 페이지 버튼
        if (postData.prev) {
            buttons.push(
                <ToggleButton
                    key="first"
                    id="page-first"
                    type="radio"
                    variant={'outline-secondary'}
                    name="radio"
                    value={1}
                    checked={pageSelect === 1}
                    onChange={(e) => setPageSelect(parseInt(e.currentTarget.value))}
                >
                    1
                </ToggleButton>
            );

            buttons.push(
                <ToggleButton
                    key="prev"
                    id="page-prev"
                    type="radio"
                    variant={'outline-secondary'}
                    name="radio"
                    value={postData.prevPage}
                    onChange={(e) => setPageSelect(parseInt(e.currentTarget.value))}
                >
                    &lt;
                </ToggleButton>
            );

            buttons.push(
                <ToggleButton
                    variant={'outline-secondary'}
                >
                    ...
                </ToggleButton>
            )
        }


        // 현재 페이지 번호 목록
        postData.pageNumList.forEach(pageNum => {
            buttons.push(
                <ToggleButton
                    key={pageNum}
                    id={`page-${pageNum}`}
                    type="radio"
                    variant={'outline-secondary'}
                    name="radio"
                    value={pageNum}
                    checked={pageSelect === pageNum}
                    onChange={(e) => setPageSelect(parseInt(e.currentTarget.value))}
                >
                    {pageNum}
                </ToggleButton>
            );
        });

        if (postData.next) {
            buttons.push(
                <ToggleButton
                    variant={'outline-secondary'}
                >
                    ...
                </ToggleButton>
            )

            buttons.push(
                <ToggleButton
                    key="next"
                    id="page-next"
                    type="radio"
                    variant={'outline-secondary'}
                    name="radio"
                    value={postData.nextPage}
                    onChange={(e) => setPageSelect(parseInt(e.currentTarget.value))}
                >
                    &gt;
                </ToggleButton>
            );

            // 마지막 페이지 버튼
            buttons.push(
                <ToggleButton
                    key="last"
                    id="page-last"
                    type="radio"
                    variant={'outline-secondary'}
                    name="radio"
                    value={postData.totalCount}
                    checked={pageSelect === postData.totalCount}
                    onChange={(e) => setPageSelect(parseInt(e.currentTarget.value))}
                >
                    {postData.totalCount}
                </ToggleButton>
            );
        }

        return buttons;
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
                    {/*<ButtonGroup>*/}
                    {/*    {radios.map((radio, idx) => (*/}
                    {/*        <ToggleButton*/}
                    {/*            key={idx}*/}
                    {/*            id={`radio-${idx}`}*/}
                    {/*            type="radio"*/}
                    {/*            variant={'outline-secondary'}*/}
                    {/*            name="radio"*/}
                    {/*            value={radio.value}*/}
                    {/*            checked={pageSelect === radio.value}*/}
                    {/*            onChange={(e) => setPageSelect(e.currentTarget.value)}*/}
                    {/*        >*/}
                    {/*            {radio.name}*/}
                    {/*        </ToggleButton>*/}
                    {/*    ))}*/}
                    {/*</ButtonGroup>*/}

                    <ButtonGroup>
                        {generatePageButtons()}
                    </ButtonGroup>
                </Container>
            </Col>
        </Container>
    );
}

export default Contents;
