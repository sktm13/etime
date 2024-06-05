// LoadData.js
// DB에서 데이터를 받아 Store에 저장하는 컴포넌트

import {useEffect} from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {
    setIsDataLoaded,
    setIsPostLoaded,
    setIsUserLoaded,
    setPostData,
    setUserData,
    setIsPostChanged,
    setIsLogined
} from "../store";
import {useCookies} from "react-cookie";
import {jwtDecode} from "jwt-decode";
import {useNavigate} from "react-router-dom";



function LoadData() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 쿠키 데이터 로드
    const [cookie, setCookie] = useCookies(['accessToken']);

    // store에서 데이터 로드
    const isDataLoaded = useSelector(state => state.isDataLoaded);
    const isPostLoaded = useSelector(state => state.isPostLoaded);
    const isPostChaneged = useSelector(state => state.isPostChanged);
    const isLogined = useSelector(state => state.isLogined);

    const postData = useSelector(state => state.postData);

    
    // // 서버에서 Post 데이터 로드
    // const handleLoadPost = () => {
    //     axios.get("http://localhost:8080/api/posts/list", {
    //         headers: {Authorization: `Bearer ${cookie.accessToken}`},
    //     })
    //         .then((res) => {
    //             if (!res.data.error) {
    //                 dispatch(setPostData(res.data));
    //                 console.log(res.data)
    //                 dispatch(setIsPostLoaded(true));
    //             }
    //             else {
    //                 if (res.data.error === "ERROR_ACCESS_TOKEN") {
    //                     navigate('/pages/login');
    //                 }
    //                 console.log(res.data.error);
    //                 dispatch(setIsPostLoaded(false))
    //             }
    //
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //             dispatch(setIsPostLoaded(false));
    //         });
    // }


    const handleLoginCheck = () => {
        if (cookie.accessToken) {
            setIsLogined(true)
            setIsUserLoaded(true)
        }
        else {
            setIsLogined(false)
            setIsUserLoaded(false)
        }
    }




    if (isPostLoaded) {
        dispatch(setIsDataLoaded(true))
    }


    useEffect(() => {
        dispatch(setIsDataLoaded(false));
        dispatch(setIsPostLoaded(false));

        handleLoginCheck();
    }, []);


    // useEffect(() => {
    //     handleLoadPost();
    //
    //     // 실패 후 5초 뒤 재시도
    //     const timer = setInterval(() => {
    //         if (!isDataLoaded) {
    //             handleLoadPost();
    //         }
    //     dispatch(setIsPostChanged(true));
    //     }, 5000);
    //
    //     return () => clearInterval(timer);
    // }, [isDataLoaded, dispatch])
}

export default LoadData;