// LoadData.js
// DB에서 데이터를 받아 Store에 저장하는 컴포넌트

import {useSelector, useDispatch} from "react-redux";
import {setIsLoading, setPostData, setCommentData, setSortOrder, setCategoryData, setCurrentCategory} from "../store";
import axios from "axios";

const HandleLoadPost = () => {
    const dispatch = useDispatch();
    let loadCount = 0;

    // 
    dispatch(setIsLoading(true))
    axios.get("http://localhost:8080/api/posts")
        .then((result) => {
            dispatch(setPostData(result.data));
            loadCount += 1;
        })
        .catch(() => {
            dispatch(setIsLoading(true));
        }, [])

    axios.get("http://localhost:8080/api/comments")
        .then((result) => {
            dispatch(setCommentData(result.data));
            loadCount += 1;
        })
        .catch(() => {
            dispatch(setIsLoading(true));
        }, [])

    axios.get("http://localhost:8080/api/categories")
        .then((result) => {
            dispatch(setCategoryData(result.data));
            loadCount += 1;
        })
        .catch(()=>{
            dispatch(setIsLoading(true));
        }, [])

    if (loadCount === 3) {
        dispatch(setIsLoading(false));
    }
}

function LoadData() {
    // store에서 데이터 불러오기
    const isLoading = useSelector(state => state.isLoading);

    if (isLoading == true)
        return <div>로딩중</div>
    else if (isLoading == false)
        return <div>로딩완료</div>

}

export default LoadData;