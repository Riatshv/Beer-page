import {createStore} from "redux";
import { beersReducer } from "./modules/beers/reducer";
import { applyMiddleware } from "redux"
import { loadBeersIfNotExist } from "./modules/beers/middlewares/loadBeersIfNotExist";
import { beerReducer } from "./modules/beer/reducer";
import { loadBeerIfNotExist } from "./modules/beer/middlewares/loadBeerIfNotExist";
import { searchReducer } from "./modules/search/reducer";
import { loadBeersForSearch } from "./modules/search/middlewares/loadBeersForSearch";


const rootReducerInitialState = {

};

const rootReducer = (state = rootReducerInitialState, action) => ({
    beers: beersReducer(state.beers, action),
    beer: beerReducer(state.beer, action),
    search: searchReducer(state.search, action),
});


export const store = createStore(rootReducer, applyMiddleware(
    loadBeersIfNotExist,
    loadBeerIfNotExist,
    loadBeersForSearch,
));