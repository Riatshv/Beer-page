import { LOADING_STATUS } from "../../../constants/loadingStatus"
import { initialNumberOfBeers } from "../../../constants/initialNumberOfBeers"
import { BEERS_ACTIONS } from "./actions"
import { selectMaxNumberOfBeers } from "./selectors"

const beersReducerInitialState = {
    entities: {

    },
    maxNumberOfBeers: initialNumberOfBeers,
    loadingStatus: LOADING_STATUS.notStartedLoading,
    currentPage: 1,
}

export const beersReducer = (state = beersReducerInitialState, action) => {
    switch (action.type) {
        case BEERS_ACTIONS.loadBeers: {
            return {
                ...state,
                loadingStatus: LOADING_STATUS.startedLoading,
            }
        }

        case BEERS_ACTIONS.successBeers: {
            const beers = action.payload.beers;
            const page = action.payload.page;
            return {
                ...state,
                loadingStatus: LOADING_STATUS.successLoading,
                maxNumberOfBeers: initialNumberOfBeers,
                currentPage: page,
                entities: beers.reduce((acc, beer) => {
                    acc[beer.id] = beer;
                    return {
                        ...acc
                    }
                }, {})
            }
        }

        case BEERS_ACTIONS.failedBeers: {
            return {
                ...state,
                loadingStatus: LOADING_STATUS.failedLoading,
            }
        }

        case BEERS_ACTIONS.inProcess: {
            return {
                ...state,
                loadingStatus: LOADING_STATUS.inProcess
            }
        }

        case BEERS_ACTIONS.changeNumberOfMaxBeers: {
            const maxNumberOfBeers = state.maxNumberOfBeers;
            const step = action.payload;
            const beersArrayLength = Object.keys(state.entities).length;
            if (maxNumberOfBeers >= beersArrayLength) {
                return {
                    ...state,
                }
            }
            return {
                ...state,
                maxNumberOfBeers: maxNumberOfBeers + step,
            }
        }

        // case BEERS_ACTIONS.searchBeers: {
        //     const word = action.payload;
        //     const beers = state.entities;
        //     const newState = Object.values(beers).reduce((acc,beer) => {
        //         if ( beer.name.includes(word) ){
        //             acc[beer.id] = beer;
        //         }
        //         return {
        //             ...acc
        //         }
        //     }, {});
        //     console.log(newState)
        //     return newState;
        // }

        // case BEERS_ACTIONS.changeSearchWord: {
        //     return {
        //         ...state,
        //     }
        // }

        default: {
            return state
        }
    }
}