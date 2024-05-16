import {configureStore, createSlice} from "@reduxjs/toolkit";

const isPostLoaded = createSlice({
    name: "isPostLoaded",
    initialState: false,
    reducers: {
        setIsPostLoaded: (state, action) => {
            return action.payload;
        }
    }
})

const isPostChanged = createSlice({
    name: "isPostChanged",
    initialState: false,
    reducers: {
        setIsPostChanged: (state, action) => {
            return action.payload;
        }
    }
})

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

const userPostData = createSlice({
    name : 'userPostData',
    initialState: [],
    reducers: {
        setUserPostData: (state, action) => {
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

const sortOrder = createSlice({
    name: 'sortOrder',
    initialState: 'date_desc',
    reducers: {
        setSortOrder: (state, action) => {
            return action.payload;
        }
    }
})

const categoryData = createSlice({
    name: 'categoryData',
    initialState: [],
    reducers: {
        setCategoryData: (state, action) => {
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

export default configureStore({
    reducer: {
        isPostLoaded: isPostLoaded.reducer,
        isPostChanged: isPostChanged.reducer,
        userData: userData.reducer,
        postData: postData.reducer,
        userpostData: postData.reducer,
        commentData: commentData.reducer,
        sortOrder: sortOrder.reducer,
        categoryData: categoryData.reducer,
        currentCategory: currentCategory.reducer
    }
});

export const { setIsPostLoaded } = isPostLoaded.actions;
export const { setIsPostChanged } = isPostChanged.actions;
export const { setUserData } = userData.actions;
export const { setPostData } = postData.actions;
export const { setCommentData } = commentData.actions;
export const { setSortOrder } = sortOrder.actions;
export const { setCategoryData } = categoryData.actions;
export const { setCurrentCategory } = currentCategory.actions;