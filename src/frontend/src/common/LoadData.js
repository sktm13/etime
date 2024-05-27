// LoadData.js
// DB에서 데이터를 받아 Store에 저장하는 컴포넌트

import {useEffect} from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {
    setIsDataLoaded, setIsPostLoaded, setIsCategoryLoded, setIsCommentLoded, setIsUserLoaded,
    setPostData, setCategoryData, setUserData,
    setIsPostChanged, setIsLogined
} from "../store";
import {useCookies} from "react-cookie";



function LoadData() {
    const dispatch = useDispatch();

    // 쿠키 데이터 로드
    const [cookie, setCookie] = useCookies(['accessToken']);

    // store에서 데이터 로드
    const isDataLoaded = useSelector(state => state.isDataLoaded);
    const isPostLoaded = useSelector(state => state.isPostLoaded);
    const isCategoryLoaded = useSelector(state => state.isCategoryLoaded);
    const isCommentLoaded = useSelector(state => state.isCommentLoaded);
    const isUserLoaded = useSelector(state => state.isUserLoaded);
    const isPostChaneged = useSelector(state => state.isPostChanged);


    const handleLoadPost = () => {
        // 서버에서 Post 데이터 불러오기
        axios.get("http://localhost:8080/api/post/desc", {
            headers: {Authorization: `Bearer ${cookie.accessToken}`}
        })
            .then((result) => {
                dispatch(setPostData(result.data));
                dispatch(setIsPostLoaded(true));
            })
            .catch(() => {
                dispatch(setIsPostLoaded(false));
            });


        // axios.get("http://localhost:8080/api/comment/")
        //     .then((result) => {
        //         dispatch(setCommentData(result.data));
        //     })
        //     .catch(() => {
        //
        //     })

        // axios.get("http://localhost:8080/api/category/")
        //     .then((result) => {
        //         dispatch(setCategoryData(result.data));
        //     }).catch(() => {
        //
        //     })

        // axios.get("https://localhost:8080/api/user/")
        //     .then((result) => {
        //         dispatch(setUserData(result.data));
        //     }).catch(() => {
        //
        //     })

        // Promise.all([
        //     axios.get("http://localhost:8080/api/user/"),
        //     axios.get("http://localhost:8080/api/posts/desc"),
        //     axios.get("http://localhost:8080/api/comment/"),
        //     axios.get("http://localhost:8080/api/category"),
        // ]).then

        if (isPostLoaded) {
            dispatch(setIsDataLoaded(true))
        }
    };


    useEffect(() => {
        dispatch(setIsDataLoaded(true));
        dispatch(setIsUserLoaded(true));
        dispatch(setIsPostLoaded(true));
        dispatch(setIsCategoryLoded(true));
        dispatch(setIsCommentLoded(true));

        dispatch(setIsLogined(true))
    }, []);


    useEffect(() => {
        // handleLoadPost(); // 컴포넌트 마운트 시 데이터 로드 시도

        // 실패 후 5초 뒤 재시도
        const timer = setInterval(() => {
            if (!isDataLoaded) {
                // handleLoadPost();
            }
        dispatch(setIsPostChanged(true));
        }, 5000);

        return () => clearInterval(timer);
    }, [isDataLoaded, dispatch])
}

export default LoadData;