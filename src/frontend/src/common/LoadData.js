// LoadData.js
// DB에서 데이터를 받아 Store에 저장하는 컴포넌트

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setIsDataLoaded, setIsLogined, setIsPostLoaded, setIsUserLoaded} from "../store";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";


function LoadData() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 쿠키 데이터 로드
    const [cookie, setCookie] = useCookies(['accessToken']);

    // store에서 데이터 로드
    const isPostLoaded = useSelector(state => state.isPostLoaded);
    const isDataLoaded = useSelector(state => state.isDataLoaded);

    const handleLoginCheck = () => {
        if (cookie.accessToken) {
            dispatch(setIsLogined(true))
            dispatch(setIsUserLoaded(true))
        } else {
            dispatch(setIsLogined(false))
            dispatch(setIsUserLoaded(false))
        }
    }

    if (isPostLoaded) {
        dispatch(setIsDataLoaded(true))
    }

    useEffect(() => {
        dispatch(setIsDataLoaded(false))
        dispatch(setIsPostLoaded(false))
        handleLoginCheck();
    }, []);
}

export default LoadData;