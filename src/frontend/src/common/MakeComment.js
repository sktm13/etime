// MakeCommnet.js
// Post.js에서 댓글을 생성하는 컴포넌트

import {ListGroup} from "react-bootstrap";
import {useSelector} from "react-redux";

function MakeComment(props) {
    // store 데이터 불러오기
    const commentData = useSelector(state => state.commentData);

    return (
        <ListGroup>
            <ListGroup.Item>
                <strong>{commentData[props.i].userName}</strong><br/>
                {commentData[props.i].comment}
            </ListGroup.Item>
        </ListGroup>
    )
}

export default MakeComment;