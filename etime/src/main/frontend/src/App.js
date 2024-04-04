import { useEffect, useState} from "react";
import axios from "axios";
import './App.css'

function App() {
    const [hello, setHello] = useState('');


    useEffect(() => {
        axios.get("http://localhost:8080/api/test")
            .then((res) => {
                setHello(res.data);
            })
            .catch(() => {
                setHello('통신 실패');
            });
    }, []);
    return (
        <div className="App">
            <p>백엔드 데이터 : {hello}</p>
        </div>
    );
}

export default App;
