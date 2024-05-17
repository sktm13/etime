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

    // state 생성
    const [postData, setPostData] = useState([]);
    const [isPostLoaded, setIsPostLoaded] = useState(false);

    // 서버에서 데이터 불러오기
    useEffect(() => {
        axios.get("http://localhost:8080/api/post/desc")
            .then((result) => {
                setPostData(result.data);
                setIsPostLoaded(true);
            })
            .catch(() => {
                setIsPostLoaded(false);
            });
    }, []);

    if (!isPostLoaded) {
        return <div>로딩중...</div>
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
            postData.map((a, i) => {
                return (<MakeCard i={i} postData={postData[i]} />)
            })
        }
    </Row>
</Col>
    );
}


export default Contents;
