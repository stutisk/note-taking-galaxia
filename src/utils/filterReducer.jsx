const initialFilterState = {
    tag: "all",
    priority: "all",
    sortByDate: "latest",
};

export const filterReducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY_DATE":
            return { ...state, sortByDate: action.payload };
        case "FILTER_BY_TAG":
            return { ...state, tag: action.payload };
        case "FILTER_BY_PRIORITY":
            return { ...state, priority: action.payload };
        case "CLEAR_FILTERS":
            return { ...initialFilterState };
        default:
            return{...state}    
    }
} 