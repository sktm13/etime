// MakeCard.js
// Content.js, Mypage.js에서 카드를 생성하는 컴포넌트
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function MakeCard(props) {
    const navigate = useNavigate();
    const postData = props.postData;

    return (
    <Card>
        <Card.Link onClick={() => {navigate("./pages/post/" + (postData.id))}}>
            <Card.Img variant="top" src="http://via.placeholder.com/800x450" />
            <Card.Body>
                <Card.Title>{postData.title}</Card.Title>
                {/* 컨텐츠 요약 (한줄 넘어가면 ...처리) */}
                <Card.Text style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>{postData.content}</Card.Text>
            </Card.Body>
        </Card.Link>
    </Card>
    );
}

export { MakeCard };