// MakeCard.js
// Content.js에서카드를 생성하는 컴포넌트
import {Card, Col, Container, Image} from 'react-bootstrap';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function MakeCard(props) {
    const postData = props.postData;
    const navigate = useNavigate();

    // state 생성
    const [timeDifference, setTimeDifference] = useState("");

    const getTimeDiffernece = () => {
        const start = new Date(postData.postDate);
        const end = new Date();

        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();
        let days = end.getDate() - start.getDate();
        let hours = end.getHours() - start.getHours();
        let minutes = end.getMinutes() - start.getMinutes();
        let seconds = end.getSeconds() - start.getSeconds();

        if (seconds < 0) {
            seconds += 60;
            minutes--;
        }
        if (minutes < 0) {
            minutes += 60;
            hours--;
        }
        if (hours < 0) {
            hours += 24;
            days--;
        }
        if (days < 0) {
            // 이전 달의 마지막 날 계산
            const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
            days += previousMonth.getDate();
            months--;
        }
        if (months < 0) {
            months += 12;
            years--;
        }

        const weeks = Math.floor(days / 7);
        days = days % 7;

        // 출력
        if (years > 0) {
            setTimeDifference(years + "년 전");
        } else if (months > 0 ) {
            setTimeDifference(months + "개월 전");
        } else if (weeks > 0) {
            setTimeDifference(weeks + "주 전");
        } else if (days > 0) {
            setTimeDifference(days + "일 전");
        } else if (hours > 0) {
            setTimeDifference(hours + "시간 전");
        } else if (minutes > 0) {
            setTimeDifference(minutes + "분 전");
        } else
            setTimeDifference(1 + "분 전");
    }


    useEffect(() => {
        getTimeDiffernece()
    }, []);

    return (
        <Card className="card">
            <Card.Link className="card-link" onClick={() => {
                navigate("./pages/post/" + postData.pid)
            }}>

                <div className="d-flex justify-content-between align-items-center">
                    <Card.Text className="card-category">카테고리</Card.Text>
                </div>

                <Card.Img className="card-img" variant="top" src="http://via.placeholder.com/800x450"/>
                <Card.Body className="card-body">
                    <Container className={"d-flex align-items-center"}>
                        <Col xs={3}>
                            <Image
                                src="http://via.placeholder.com/200x200"
                                roundedCircle
                                style={{width: '50px', height: '50px'}}/>
                        </Col>
                        <Col>
                            <Card.Title className="card-title">{postData.title}</Card.Title>

                            {
                                postData.member.nickname ? (
                                    <Card.Text className="card-para">
                                        {postData.member.nickname} : {postData.member.grade}
                                    </Card.Text>
                                ) : (
                                    <Card.Text className="card-para">
                                        작성자 정보 없음 : {postData.member.grade}
                                    </Card.Text>
                                )
                            }
                            <Card.Text className={"card-para"}>
                                추천 : {postData.score} , {timeDifference}
                            </Card.Text>
                        </Col>
                    </Container>
                </Card.Body>
            </Card.Link>
        </Card>
    );
}

export {MakeCard};
