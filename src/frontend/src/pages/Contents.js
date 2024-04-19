// Contents.js
// 메인 콘텐츠
import { Col, Row, Spinner, Button } from 'react-bootstrap';
import { MakeCard } from '../common/MakeCard';
import axios from "axios";
import {useState, useEffect} from "react";

function Contents(props) {

    const [loading, setLoading] = useState(true)
    const [postData, setPostData] = useState([])
    const [sortOrder, setSortOrder] = useState('date_desc')


    // 정렬 함수
    const sortPosts = (data = 'date_desc') => {
        return data.sort((a, b) => {
            const dateA = new Date(a.postTime);
            const dateB = new Date(b.postTime);

            switch (sortOrder) {
                case 'date_asc':
                    return dateA - dateB;
                case 'date_desc':
                    return dateB - dateA;
            }
        });
    };

    // 정렬 핸들러
    const handleSortChange = (sortOrder) => {
        setSortOrder(sortOrder)
    };


    /* DB 데이터 수신 */
    useEffect(() => {
        axios.get("http://localhost:8080/api/getpost")
            .then((res) => {
                const sortedData = sortPosts(res.data);
                setPostData(sortedData);
                setLoading(false)
            })
            .catch(()=>{
                setLoading(true)
            })
    }, [sortOrder]);


    return (
<Col className="Content">
    <Row>
        <Col>
            <Button onClick={() => handleSortChange('date_desc')}>최신순</Button>
        </Col>
        <Col>
            <Button onClick={() => handleSortChange('date_asc')}>오래된순</Button>
        </Col>
    </Row>
    <Row>
        {
            postData.map((a, i) => {
                // 카테고리 분류 기능
                // if (props.currentCategory === 0)
                    return (<MakeCard postData={postData[i]} userData={props.userData[i]} />)
                // else if (props.currentCategory === props.postData[i].categoryId )
                //     return (<MakeCard postData={props.postData[i]} userData={props.userData[i]} />)
            })
        }
    </Row>
    {/* 무한스크롤 */}
    <Row>
        {
            loading? <Spinner animation="border" /> : null
        }
    </Row>
</Col>
    );
}


export default Contents;
