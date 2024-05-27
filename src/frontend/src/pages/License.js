// license.js
// 전문가 신청 페이지
import {Container, Row, Form, Button} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {useState} from "react";

function Donate() {
    // store 데이터 불러오기
    const isLogined = useSelector(state => state.isLogined)

    // state 생성
    const [dragOver, setDragOver] = useState(false);
    const [files, setFiles] = useState([]);

    

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOver(true);
    }

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOver(false);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOver(false);

        const droppedFiles = Array.from(e.dataTransfer.files);
        setFiles(droppedFiles);
        console.log(droppedFiles);
        // 파일처리로직 추가
        
    }
    
    const hanldeFileSelect = (e) => {
        const selectedFiles = Array.from(e.dataTransfer.files);
        setFiles(selectedFiles);
        console.log(selectedFiles);
        // 파일처리로직 추가
    }

    // 제출 버튼 핸들러
    const handleSubmit = () => {
        // ajax요청로직 추가
        console.log('제출된 파일 목록 : ', files);
        alert('파일이 성공적으로 제출되었습니다. (임시)');
    }




    // 로그인 상태가 아닐 때 로그인 페이지로 이동
    if (!isLogined) {
        return <Navigate to={'/pages/login'} />
    }

    return (
        <Container>
            <Row className={"license__header"}>
                <h2><b>전문가 신청</b></h2>
                <h4>자격증 제출</h4>
            </Row>
            <Row className={"license__body"}>
                <Form.Group controlId="formFileDropZone" className="mb-3">
                    <Form.Label><h4>보유한 자격증을 제출합니다.</h4></Form.Label>
                    <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={()=>document.getElementById('fileInput').click()}
                        className={"license__body__dropzone"}
                        style={{backgroundColor: dragOver ? '#a1c0ea' : '#ededed'}}
                    >
                        <h4><b>업로드할 파일 놓기</b></h4>
                        <h6>또는</h6>
                        <Button
                            variant={"primary"}
                            onClick={()=>document.getElementById('fileInput').click()}>
                            파일 선택
                        </Button>
                    </div>
                    <Form.Control type="file" multiple id={"fileInput"} style={{display: 'none'}}/>
                </Form.Group>
            </Row>
            <Row>
                <div style={{width: '100%'}}>
                    <h5>업로드된 파일 목록 : </h5>
                    <ul>
                        {files.map((file, i) => (
                            <li>{file.name}</li>
                        ))}
                    </ul>
                </div>
            </Row>
            <Row>
                <Button variant="success" onClick={handleSubmit}>제출하기</Button>
            </Row>
        </Container>
    )
}

export default Donate;