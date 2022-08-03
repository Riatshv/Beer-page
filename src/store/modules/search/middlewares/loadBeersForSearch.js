import { failedBeers, startLoadingBeers, successBeers } from "../../beers/actions";
import { failedLoadingBeersFromSearch, SEARCH_ACTIONS, startLoadingBeersFromSearch, successLoadingBeersFromSearch } from "../actions";


export const loadBeersForSearch = store => next => action => {
    if (action.type !== SEARCH_ACTIONS.searchBeer) {
        return next(action);
    }
    console.log("LoadBeersForSearch",action)

    store.dispatch(startLoadingBeersFromSearch())

    console.log("LoadBeersForSearch",store.getState())
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${action.payload}`)
        .then((response) => response.json())
        .then((beers) => {console.log(action.payload); store.dispatch(successLoadingBeersFromSearch(beers, action.payload))})
        .catch((error) => store.dispatch(failedLoadingBeersFromSearch()))
}