// LoadData.js
// DB에서 데이터를 받아 Store에 저장하는 컴포넌트

import {useSelector, useDispatch} from "react-redux";
import {setIsPostLoaded, setPostData, setCommentData, setSortOrder, setCategoryData, setCurrentCategory, setUserData} from "../store";
import axios from "axios";

import {useEffect} from "react";


function LoadData() {
    // store에서 데이터 불러오기
    const isPostLoaded = useSelector(state => state.isPostLoaded);
    const dispatch = useDispatch();


    const handleLoadPost = () => {
        axios.get("http://localhost:8080/api/post/desc")
            .then((result) => {
                dispatch(setPostData(result.data));
                dispatch(setIsPostLoaded(true));
            })
            .catch(() => {
                dispatch(setIsPostLoaded(false));
            });

        axios.get("http://localhost:8080/api/comment/")
            .then((result) => {
                dispatch(setCommentData(result.data));
            })
            .catch(() => {

            })

        axios.get("http://localhost:8080/api/category/")
            .then((result) => {
                dispatch(setCategoryData(result.data));
            }).catch(() => {

            })

        axios.get("https://localhost:8080/api/user/")
            .then((result) => {
                dispatch(setUserData(result.data));
            }).catch(() => {

            })

        // Promise.all([
        //     axios.get("http://localhost:8080/api/user/"),
        //     axios.get("http://localhost:8080/api/posts/desc"),
        //     axios.get("http://localhost:8080/api/comment/"),
        //     axios.get("http://localhost:8080/api/category"),
        // ]).then
    };

    useEffect(() => {
        dispatch(setIsPostLoaded(false));
    }, []);


    useEffect(() => {
        handleLoadPost(); // 컴포넌트 마운트 시 데이터 로드 시도

        // 실패 후 5초 뒤 재시도
        const timer = setInterval(() => {
            if (!isPostLoaded) {
                handleLoadPost();
            }
        }, 5000);

        return () => clearInterval(timer);
    }, [isPostLoaded, dispatch])
}

export default LoadData;