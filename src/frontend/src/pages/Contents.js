// Contents.js
// 메인 콘텐츠
import { Col, Row, Spinner, Button } from 'react-bootstrap';
import { MakeCard } from '../common/MakeCard';
import axios from "axios";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

// store 함수 불러오기
import {setIsPostLoaded, setSortOrder, setIsPostChanged, setPostData} from "../store";

function Contents() {
    const dispatch = useDispatch();

    //store 데이터 불러오기
    const isLoading = useSelector(state => state.isLoading);
    const sortOrder = useSelector(state => state.sortOrder);
    // const postData = useSelector(state => state.postData);

    const [postData, setPostData] = useState([]);

    // // 정렬 함수
    // const sortPosts = (data = 'date_desc') => {
    //     return data.sort((a, b) => {
    //         const dateA = new Date(a.postTime);
    //         const dateB = new Date(b.postTime);
    //
    //         switch (sortOrder) {
    //             case 'date_asc':
    //                 return dateA - dateB;
    //             case 'date_desc':
    //                 return dateB - dateA;
    //         }
    //     });
    // };
    //
    // // 정렬 핸들러
    // const handleSortOrder = (sortOrder) => {
    //     dispatch(setSortOrder(sortOrder))
    // };

    useEffect(() => {
        axios.get("http://localhost:8080/api/post/desc")
            .then((result) => {
                dispatch(setPostData(result.data));
                dispatch(setIsPostLoaded(true));
            })
            .catch(() => {
                dispatch(setIsPostLoaded(false));
            });
    }, []);

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
            isLoading ? null :
                postData.map((a, i) => {
                    return (<MakeCard i={i} postData={postData} />)
                })
        }
    </Row>
</Col>
    );
}


export default Contents;
