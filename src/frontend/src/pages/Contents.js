// Contents.js
// 메인 콘텐츠
import { Col, Row } from 'react-bootstrap';
import { MakeCard } from '../common/MakeCard';


function Contents(props) {

    return (
<Col className="Content">
    <Row>
        {   
            props.postData.map((a, i) => {
                if (props.currentCategory === 0)
                    return (<MakeCard postData={props.postData[i]} userData={props.userData[i]} />)
                else if (props.currentCategory === props.postData[i].categoryId )
                    return (<MakeCard postData={props.postData[i]} userData={props.userData[i]} />)
            })
        }
    </Row>
</Col>
    );
}


export default Contents;
