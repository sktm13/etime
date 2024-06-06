import {configureStore, createSlice} from "@reduxjs/toolkit";

// 데이터로드 체크
const isDataLoaded = createSlice({
    name: "isDataLoaded",
    initialState: false,
    reducers: {
        setIsDataLoaded: (state, action) => {
            return action.payload;
        }
    }
})

const isUserLoaded = createSlice({
    name: "isUserLoaded",
    initialState: false,
    reducers: {
        setIsUserLoaded: (state, action) => {
            return action.payload;
        }
    }
})

const isPostLoaded = createSlice({
    name: "isPostLoaded",
    initialState: false,
    reducers: {
        setIsPostLoaded: (state, action) => {
            return action.payload;
        }
    }
})

const isCurrentPostLoaded = createSlice({
    name: "isCurrentPostLoaded",
    initialState: false,
    reducers: {
        setIsCurrentPostLoaded: (state, action) => {
            return action.payload;
        }
    }
})

const isCategoryLoaded = createSlice({
    name: "isCategoryLoaded",
    initialState: false,
    reducers: {
        setIsCategoryLoded: (state, action) => {
            return action.payload;
        }
    }
})

const isCommentLoaded = createSlice({
    name: "isCommentLoaded",
    initialState: false,
    reducers: {
        setIsCommentLoded: (state, action) => {
            return action.payload;
        }
    }
})





// 핸들러
const isPostChanged = createSlice({
    name: "isPostChanged",
    initialState: false,
    reducers: {
        setIsPostChanged: (state, action) => {
            return action.payload;
        }
    }
})

const isLogined = createSlice({
    name: "isLogined",
    initialState: false,
    reducers: {
        setIsLogined: (state, action) => {
            return action.payload;
        }
    }
})

const sortOrder = createSlice({
    name: 'sortOrder',
    initialState: 'date_desc',
    reducers: {
        setSortOrder: (state, action) => {
            return action.payload;
        }
    }
})

const currentCategory = createSlice({
    name: 'currentCategory',
    initialState: 0,
    reducers: {
        setCurrentCategory: (state, action) => {
            return action.payload;
        }
    }
})






// 데이터
const userData = createSlice({
    name: "userData",
    initialState: [],
    reducers: {
        setUserData: (state, action) => {
            return action.payload;
        }
    }
})

const postData = createSlice({
    name : 'postData',
    initialState: [],
    reducers: {
        setPostData: (state, action) => {
            return action.payload;
        }
    }
})

const currentPostData = createSlice({
    name : 'currentPostData',
    initialState: [],
    reducers: {
        setCurrentPostData: (state, action) => {
            return action.payload;
        }
    }
})

const commentData = createSlice({
    name : 'commentData',
    initialState: [],
    reducers: {
        setCommentData: (state, action) => {
            return action.payload;
        }
    }
})

const categoryData = createSlice({
    name: 'categoryData',
    initialState: [
        {
            id: 1,
            name: "category1",
        },
        {
            id: 2,
            name: "category2",
        },
        {
            id: 3,
            name: "category3",
        },
        {
            id: 4,
            name: "category4",
        },
        {
            id: 5,
            name: "category5",
        },
        {
            id: 6,
            name: "category6",
        },
        {
            id: 7,
            name: "category7",
        },
        {
            id: 8,
            name: "category8",
        },
    ],
    reducers: {
        setCategoryData: (state, action) => {
            return action.payload;
        }
    }
})




export default configureStore({
    reducer: {
        // 데이터로드 체크
        isDataLoaded: isDataLoaded.reducer,
        isUserLoaded: isUserLoaded.reducer,
        isPostLoaded: isPostLoaded.reducer,
        isCurrentPostLoaded: isCurrentPostLoaded.reducer,
        isCategoryLoaded: isCategoryLoaded.reducer,
        isCommentLoaded: isCommentLoaded.reducer,

        // 핸들러
        isPostChanged: isPostChanged.reducer,
        isLogined: isLogined.reducer,
        sortOrder: sortOrder.reducer,
        currentCategory: currentCategory.reducer,
        
        // 데이터
        userData: userData.reducer,
        postData: postData.reducer,
        currentPostData: currentPostData.reducer,
        commentData: commentData.reducer,
        categoryData: categoryData.reducer,
    }
});


// 데이터로드 체크
export const { setIsDataLoaded } = isDataLoaded.actions;
export const { setIsUserLoaded } = isUserLoaded.actions
export const { setIsPostLoaded } = isPostLoaded.actions;
export const { setIsCurrentPostLoaded } = isCurrentPostLoaded.actions;
export const { setIsCategoryLoded } = isCategoryLoaded.actions;
export const { setIsCommentLoded } = isCommentLoaded.actions;


// 핸들러
export const { setIsPostChanged } = isPostChanged.actions;
export const { setIsLogined } = isLogined.actions;
export const { setSortOrder } = sortOrder.actions;
export const { setCurrentCategory } = currentCategory.actions;

// 데이터
export const { setUserData } = userData.actions;
export const { setPostData } = postData.actions;
export const { setCurrentPostData } = currentPostData.actions;
export const { setCommentData } = commentData.actions;
export const { setCategoryData } = categoryData.actions;
