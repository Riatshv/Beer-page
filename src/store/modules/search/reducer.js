
import { getValue } from "@testing-library/user-event/dist/utils";
import { initialNumberOfBeers } from "../../../constants/initialNumberOfBeers";
import { LOADING_STATUS } from "../../../constants/loadingStatus";
import { PAGE_INFORMATION } from "../../../constants/pageInformation";
import { SEARCH_ACTIONS } from "./actions"


export const initialState = {
    entities: {

    },
    loadingStatus: LOADING_STATUS.notStartedLoading,
    maxNumberOfBeers: initialNumberOfBeers,
    currentPage: 1,
    type: "search",
    leftIndex: 0,
    searchingWord: "",
    rightIndex: PAGE_INFORMATION.beersPerPage,
}


export const searchReducer = (state = initialState, action) => {
    switch (action.type) {  
        case SEARCH_ACTIONS.loadBeers: {
            return {
                ...state,
                loadingStatus: LOADING_STATUS.startedLoading,
            }
        }

        case SEARCH_ACTIONS.successSearch: {
            const beers = action.payload.beers;
            const searchingWord = action.payload.searchingWord;
            return {
                ...state,
                loadingStatus: LOADING_STATUS.successLoading,
                maxNumberOfBeers: initialNumberOfBeers,
                currentPage: 1,
                searchingWord: searchingWord,
                entities: beers.reduce((acc, beer) => {
                    acc[beer.id] = beer;
                    return {
                        ...acc
                    }
                }, {})
            }
        }

        case SEARCH_ACTIONS.failedSearch: {
            return {
                ...state,
                loadingStatus: LOADING_STATUS.failedLoading,
            }
        }

        case SEARCH_ACTIONS.inProcess: {
            return {
                ...state,
                loadingStatus: LOADING_STATUS.inProcess
            }
        }

        case SEARCH_ACTIONS.changePage: {
            const currentPage = action.payload;
            return {
                ...state,
                currentPage: currentPage,
            }
        }

        case SEARCH_ACTIONS.changeBeers: {
            const currentPage = action.payload;

            return {
                ...state,
                leftIndex: currentPage*PAGE_INFORMATION.beersPerPage - PAGE_INFORMATION.beersPerPage,
                rightIndex: currentPage*PAGE_INFORMATION.beersPerPage,
            }
        }

        default: {
            return state;
        }
    }
}