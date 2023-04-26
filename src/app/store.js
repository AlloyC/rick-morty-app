import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../features/characters/charactersSlice";
import searchReducer from "../features/search/searchSlice";
import loadingReducer from "../features/loading/loadingSlice";
import modalReducer from "../features/modal/modalSlice";
import pageReducer from "../features/page/pageSlice";
import  filterReducer  from "../features/filter/filter";
import responseStatusReducer from "../features/responseStatus/responseStatusSlice";
import filterButtonReducer from "../features/filter/filterButton";



export const store = configureStore({
    reducer: {
        characters: characterReducer,
        search: searchReducer,
        loading: loadingReducer,
        modal: modalReducer,
        page: pageReducer,
        filter: filterReducer,
        responseStatus: responseStatusReducer,
        filterButton: filterButtonReducer
    }
})