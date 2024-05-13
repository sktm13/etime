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

const userData = createSlice({
    name: "userData",
    initialState: [
        {
            id : 0,
            name : "user0",
            follower : 12345,
            userImg : 'http://via.placeholder.com/150',
        },
        {
            id : 1,
            name : "user1",
            follower : 145,
            userImg : 'http://via.placeholder.com/150',
        },
        {
            id : 2,
            name : "user2",
            follower : 1233345,
            userImg : 'http://via.placeholder.com/150',
        },
    ],
    reducers: {
        setUserData: (state, action) => {
            return action.payload;
        }
    }
})

const postData = createSlice({
    name : 'postData',
    initialState: [
        {
            id : 0,
            title : "Title0",
            content : "Summary0",
            text : "Text0",
            userId : 0,
            date : '2024-04-08',
            thumnail : "http://via.placeholder.com/800x450",
        },
        {
            id : 1,
            title : "Title1",
            content : "Summary2",
            text : "Text1",
            userId : 1,
            date : '2024-04-08',
            thumnail : "http://via.placeholder.com/800x450",
        },
        {
            id : 2,
            title : "Title2",
            content : "Summary2",
            text : "Text2",
            userId : 2,
            date : '2024-04-08',
            thumnail : "http://via.placeholder.com/800x450",
        },
    ],
    reducers: {
        setPostData: (state, action) => {
            return action.payload;
        }
    }
})

const userPostData = createSlice({
    name : 'userPostData',
    initialState: [
        {
            id : 0,
            title : "Title0",
            content : "Summary0",
            text : "Text0",
            author : "author0",
            date : '2024-04-08',
            thumnail : "http://via.placeholder.com/800x450",
        },
        {
            id : 1,
            title : "Title1",
            content : "Summary2",
            text : "Text1",
            author : "author1",
            date : '2024-04-08',
            thumnail : "http://via.placeholder.com/800x450",
        },
        {
            id : 2,
            title : "Title2",
            content : "Summary2",
            text : "Text2",
            author : "author2",
            date : '2024-04-08',
            thumnail : "http://via.placeholder.com/800x450",
        },
    ],
    reducers: {
        setUserPostData: (state, action) => {
            return action.payload;
        }
    }
})

const commentData = createSlice({
    name : 'commentData',
    initialState: [
        {
            id : 0,
            comment : "comment0",
            date : '2024-04-16',
            userId : 0,
            userName : 'username0',
            postId : 0,
        },
        {
            id : 1,
            comment : "comment1",
            date : '2024-04-16',
            userId : 1,
            userName : 'username1',
            postId : 0,
        },{
            id : 2,
            comment : "comment2",
            date : '2024-04-16',
            userId : 0,
            userName : 'username0',
            postId : 1,
        },{
            id : 3,
            comment : "comment3",
            date : '2024-04-16',
            userId : 1,
            userName : 'username1',
            postId : 2,
        },
    ],
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
    initialState: [
        {
            id : 0,
            name : "전체",
        },
        {
            id : 1,
            name : "Category1",
        },
        {
            id : 2,
            name : "Category2",
        },
        {
            id : 3,
            name : "Category3",
        },
    ],
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
export const { setUserData } = userData.actions;
export const { setPostData } = postData.actions;
export const { setUserPostData } = userPostData.actions;
export const { setCommentData } = commentData.actions;
export const { setSortOrder } = sortOrder.actions;
export const { setCategoryData } = categoryData.actions;
export const { setCurrentCategory } = currentCategory.actions;