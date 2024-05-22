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
    initialState: [
        {
            id: 1,
            email: "user1@example.com",
            displayName: "user1",
            social: false,
        },
        {
            id: 2,
            email: "user2@example.com",
            displayName: "user2",
            social: false,
        },
        {
            id: 3,
            email: "user3@example.com",
            displayName: "user3",
            social: true,
        }
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
            id: 1,
            userId: 1,
            title: "Post 1",
            content: "국회가 재적의원 과반수의 찬성으로 계엄의 해제를 요구한 때에는 대통령은 이를 해제하여야 한다. 국회에서 의결된 법률안은 정부에 이송되어 15일 이내에 대통령이 공포한다.\n" +
                "\n" +
                "헌법에 의하여 체결·공포된 조약과 일반적으로 승인된 국제법규는 국내법과 같은 효력을 가진다. 국가는 전통문화의 계승·발전과 민족문화의 창달에 노력하여야 한다.",
            postCategory: 1,
        },
        {
            id: 2,
            userId: 1,
            title: "Post 2",
            content: "선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의 보호를 받는다.\n" +
                "\n" +
                "사면·감형 및 복권에 관한 사항은 법률로 정한다. 군인은 현역을 면한 후가 아니면 국무총리로 임명될 수 없다. 대한민국의 경제질서는 개인과 기업의 경제상의 자유와 창의를 존중함을 기본으로 한다.",
            postCategory: 1,
        },
        {
            id: 3,
            userId: 1,
            title: "Post 3",
            content: "모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 피고인의 자백이 고문·폭행·협박·구속의 부당한 장기화 또는 기망 기타의 방법에 의하여 자의로 진술된 것이 아니라고 인정될 때 또는 정식재판에 있어서 피고인의 자백이 그에게 불리한 유일한 증거일 때에는 이를 유죄의 증거로 삼거나 이를 이유로 처벌할 수 없다.\n" +
                "\n" +
                "제안된 헌법개정안은 대통령이 20일 이상의 기간 이를 공고하여야 한다. 대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를 요구할 수 없다.",
            postCategory: 1,
        },
        {
            id: 4,
            userId: 1,
            title: "Post 4",
            content: "지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을 관리하며, 법령의 범위안에서 자치에 관한 규정을 제정할 수 있다. 누구든지 체포 또는 구속의 이유와 변호인의 조력을 받을 권리가 있음을 고지받지 아니하고는 체포 또는 구속을 당하지 아니한다. 체포 또는 구속을 당한 자의 가족등 법률이 정하는 자에게는 그 이유와 일시·장소가 지체없이 통지되어야 한다.\n" +
                "\n" +
                "대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다. 모든 국민은 종교의 자유를 가진다. 대통령은 취임에 즈음하여 다음의 선서를 한다",
            postCategory: 1,
        },
        {
            id: 5,
            userId: 1,
            title: "Post 5",
            content: "이 헌법에 의한 최초의 대통령의 임기는 이 헌법시행일로부터 개시한다. 농업생산성의 제고와 농지의 합리적인 이용을 위하거나 불가피한 사정으로 발생하는 농지의 임대차와 위탁경영은 법률이 정하는 바에 의하여 인정된다.\n" +
                "\n" +
                "모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 국회의원은 그 지위를 남용하여 국가·공공단체 또는 기업체와의 계약이나 그 처분에 의하여 재산상의 권리·이익 또는 직위를 취득하거나 타인을 위하여 그 취득을 알선할 수 없다.",
            postCategory: 1,
        },
        {
            id: 6,
            userId: 1,
            title: "Post 6",
            content: "국가는 청원에 대하여 심사할 의무를 진다. 대통령은 헌법과 법률이 정하는 바에 의하여 공무원을 임면한다. 대한민국의 영토는 한반도와 그 부속도서로 한다.\n" +
                "\n" +
                "헌법개정은 국회재적의원 과반수 또는 대통령의 발의로 제안된다. 사면·감형 및 복권에 관한 사항은 법률로 정한다. 국무총리는 국회의 동의를 얻어 대통령이 임명한다.",
            postCategory: 1,
        },
        {
            id: 7,
            userId: 1,
            title: "Post 7",
            content: "대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 모든 국민은 학문과 예술의 자유를 가진다. 형사피해자는 법률이 정하는 바에 의하여 당해 사건의 재판절차에서 진술할 수 있다.\n" +
                "\n" +
                "국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는 국가원로자문회의를 둘 수 있다. 국군의 조직과 편성은 법률로 정한다.",
            postCategory: 2,
        },
        {
            id: 8,
            userId: 1,
            title: "Post 8",
            content: "사면·감형 및 복권에 관한 사항은 법률로 정한다. 비상계엄하의 군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의 경우와 초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에 한하여 단심으로 할 수 있다. 다만, 사형을 선고한 경우에는 그러하지 아니하다.\n" +
                "\n" +
                "국군의 조직과 편성은 법률로 정한다. 대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다. 대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한 중요정책을 국민투표에 붙일 수 있다.",
            postCategory: 2,
        },
        {
            id: 9,
            userId: 1,
            title: "Post 9",
            content: "국회의원은 그 지위를 남용하여 국가·공공단체 또는 기업체와의 계약이나 그 처분에 의하여 재산상의 권리·이익 또는 직위를 취득하거나 타인을 위하여 그 취득을 알선할 수 없다.\n" +
                "\n" +
                "헌법개정안은 국회가 의결한 후 30일 이내에 국민투표에 붙여 국회의원선거권자 과반수의 투표와 투표자 과반수의 찬성을 얻어야 한다. 정당의 설립은 자유이며, 복수정당제는 보장된다.",
            postCategory: 2,
        },
        {
            id: 10,
            userId: 1,
            title: "Post 10",
            content: "대한민국의 국민이 되는 요건은 법률로 정한다. 대한민국의 영토는 한반도와 그 부속도서로 한다. 대통령은 국회에 출석하여 발언하거나 서한으로 의견을 표시할 수 있다.\n" +
                "\n" +
                "모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다. 대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다.",
            postCategory: 3,
        },
        {
            id: 11,
            userId: 1,
            title: "Post 11",
            content: "국회는 선전포고, 국군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다. 국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다.\n" +
                "\n" +
                "대통령이 임시회의 집회를 요구할 때에는 기간과 집회요구의 이유를 명시하여야 한다. 국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 사영기업을 국유 또는 공유로 이전하거나 그 경영을 통제 또는 관리할 수 없다.",
            postCategory: 3,
        },
        {
            id: 12,
            userId: 1,
            title: "Post 12",
            content: "이 헌법은 1988년 2월 25일부터 시행한다. 다만, 이 헌법을 시행하기 위하여 필요한 법률의 제정·개정과 이 헌법에 의한 대통령 및 국회의원의 선거 기타 이 헌법시행에 관한 준비는 이 헌법시행 전에 할 수 있다.\n" +
                "\n" +
                "제2항과 제3항의 처분에 대하여는 법원에 제소할 수 없다. 공무원의 신분과 정치적 중립성은 법률이 정하는 바에 의하여 보장된다. 대통령후보자가 1인일 때에는 그 득표수가 선거권자 총수의 3분의 1 이상이 아니면 대통령으로 당선될 수 없다.",
            postCategory: 3,
        },

    ],
    reducers: {
        setPostData: (state, action) => {
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
        userpostData: postData.reducer,
        commentData: commentData.reducer,
        categoryData: categoryData.reducer,
    }
});

// 데이터로드 체크
export const { setIsDataLoaded } = isDataLoaded.actions;
export const { setIsUserLoaded } = isUserLoaded.actions
export const { setIsPostLoaded } = isPostLoaded.actions;
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
export const { setCommentData } = commentData.actions;
export const { setCategoryData } = categoryData.actions;
