import './App.css'
import { useNavigate } from "react-router-dom";

export default function Home() {
    const movePage = useNavigate();

    function gohome() {
        movePage('/home');
    }

    return (
        <div className="Home">
            <h4>asdf</h4>
            <button onClick={gohome}>첫페이지로 이동</button>
        </div>
    );
}