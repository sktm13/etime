// MakeCard.js
// Content.js, Mypage.js에서 카드를 생성하는 컴포넌트
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function MakeCard(props) {
    const navigate = useNavigate();
    const postData = props.postData;
    // const categoryData = props.postData;

    // const category = props.categoryData.find(category => category.id === props.postData.category);

    return (
        <Card className="card">
            <Card.Link className="card-link" onClick={() => { navigate("./pages/post/" + postData.pid) }}>
                <Card.Img className="card-img" variant="top" src="http://via.placeholder.com/800x450" />
                <Card.Body className="card-body">
                    <Card.Text className="card-category">카테고리</Card.Text>
                    <Card.Title className="card-title text-start">{postData.title}</Card.Title>
                    {/* 컨텐츠 요약 (한줄 넘어가면 ...처리) */}
                    <Card.Text className="card-para" id="ExtraLight" style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2
                    }} dangerouslySetInnerHTML={{ __html: postData.content }}
                    />
                </Card.Body>
            </Card.Link>
            <div className={"text-start"}></div>
        </Card>
    );
}

export { MakeCard };
