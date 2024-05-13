// LoadData.js
// DB에서 데이터를 받아 Store에 저장하는 컴포넌트

import {useSelector, useDispatch} from "react-redux";
import {setIsPostLoaded, setPostData, setCommentData, setSortOrder, setCategoryData, setCurrentCategory} from "../store";
import axios from "axios";

import {useEffect} from "react";
import {postData} from "../pages/data";


function LoadData() {
    // store에서 데이터 불러오기
    const isPostLoaded = useSelector(state => state.isPostLoaded);
    const dispatch = useDispatch();


    useEffect(() => {
        const handleLoadPost = () => {
            dispatch(setIsPostLoaded(false));
            axios.get("http://localhost:8080/api/posts")
                .then((result) => {
                    dispatch(setPostData(result.data));
                    dispatch(setIsPostLoaded(true));
                })
                .catch(() => {
                    dispatch(setIsPostLoaded(false));
                });
        };

        handleLoadPost(); // 컴포넌트 마운트 시 데이터 로드 시도

        // 실패 후 5초 뒤 재시도
        const timer = setInterval(() => {
            if (!isPostLoaded) {
                handleLoadPost();
            } else {
                clearInterval(timer); // 로딩 완료되면 타이머 중지
            }
        }, 5000);
    }, [dispatch])

    if (isPostLoaded)
        return <div>Post 로딩완료</div>
    else
        return <div>Post 로딩중......</div>
}

export default LoadData;