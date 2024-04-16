// Contents.js
// 메인 콘텐츠
import { Col, Row } from 'react-bootstrap';
import { MakeCard } from '../common/MakeCard';
import axios from "axios";
import {useState, useEffect} from "react";

function Contents(props) {

    const [postData, setPostData] = useState([
        {
            id: 0,
            user: "",
            title: "",
            content: "",
            postTime: "",
            categories: [],
            reviewList: []
        },
    ])

    useEffect(() => {
        axios.get("http://localhost:8080/api/getpost")
            .then((res) => {
                setPostData(res.data);
            })
            .catch(()=>{
                alert('글 수신 실패')
            })
    }, []);


    return (
<Col className="Content">
    <Row>
        {
            postData.map((a, i) => {
                // if (props.currentCategory === 0)
                    return (<MakeCard postData={postData[i]} userData={props.userData[i]} />)
                // else if (props.currentCategory === props.postData[i].categoryId )
                //     return (<MakeCard postData={props.postData[i]} userData={props.userData[i]} />)
            })
        }
    </Row>
</Col>
    );
}


export default Contents;
