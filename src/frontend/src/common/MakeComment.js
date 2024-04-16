// MakeCommnet.js
// Post.js에서 댓글을 생성하는 컴포넌트

import {ListGroup} from "react-bootstrap";

function MakeComment(props) {
    return (
        <ListGroup>
            <ListGroup.Item>
                <strong>{props.commentData.userName}</strong><br/>
                {props.commentData.comment}
            </ListGroup.Item>
        </ListGroup>
    )
}

export default MakeComment;