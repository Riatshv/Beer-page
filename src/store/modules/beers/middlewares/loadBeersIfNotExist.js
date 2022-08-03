import { PAGE_INFORMATION } from "../../../../constants/pageInformation";
import { BEERS_ACTIONS, failedBeers, startLoadingBeers, successBeers } from "../actions"

export const loadBeersIfNotExist = store => next => action => {
    if (action.type !== BEERS_ACTIONS.loadBeers) {
        return next(action);
    }
    
    const page = action.payload.page || 1;
    const numberOfBeers = action.payload.numberOfBeers || PAGE_INFORMATION.beersPerPage;
    store.dispatch(startLoadingBeers())


    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${numberOfBeers}`)
        .then((response) => response.json())
        .then((beers) => store.dispatch(successBeers(beers, page)))
        .catch((error) => store.dispatch(failedBeers()))
}