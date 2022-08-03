import { LOADING_STATUS } from "../../../constants/loadingStatus"
import { BEER_ACTIONS } from "./actions"

const beerReducerInitialState = {
    entities: {

    },
    loadingStatus: LOADING_STATUS.notStartedLoading,
}

export const beerReducer = (state = beerReducerInitialState, action) => {
    switch (action.type) {
        case BEER_ACTIONS.loadBeer: {
            return {
                ...state,
                loadingStatus: LOADING_STATUS.startedLoading,
            }
        }

        case BEER_ACTIONS.successBeer: {
            const beer = action.payload;
            return {
                ...state,
                loadingStatus: LOADING_STATUS.successLoading,
                entities: beer,
            }
        }

        case BEER_ACTIONS.failedBeer: {
            return {
                ...state,
                loadingStatus: LOADING_STATUS.failedLoading,
            }
        }

        case BEER_ACTIONS.inProcess: {
            return {
                ...state,
                loadingStatus: LOADING_STATUS.inProcess
            }
        }
        default: {
            return state
        }
    }
}