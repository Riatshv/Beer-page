import { BEER_ACTIONS, failedBeer, startLoadingBeer, successBeer } from "../actions"

export const loadBeerIfNotExist = store => next => action => {
    if (action.type !== BEER_ACTIONS.loadBeer) {
        return next(action);
    }

    store.dispatch(startLoadingBeer())

    fetch(`https://api.punkapi.com/v2/beers/${action.payload}`)
        .then((response) => response.json())
        .then((beer) => {
            if (beer.statusCode) {
                store.dispatch(failedBeer());
            } else {
                store.dispatch(successBeer(beer[0]))
            }
        })
        .catch((error) => {store.dispatch(failedBeer())})
}