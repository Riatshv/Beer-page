export const BEER_ACTIONS = {
    loadBeer: "beer_actions/loadBeer",
    failedBeer: "beer_actions/failedBeer",
    successBeer: "beer_actions/successBeer",
    inProcess: "beer_actions/inProcess",

};


export const loadBeer = (id) => ({
    type: BEER_ACTIONS.loadBeer,
    payload: id
});

export const failedBeer = () => ({
    type: BEER_ACTIONS.failedBeer,
});

export const successBeer = (beer) => ({
    type: BEER_ACTIONS.successBeer,
    payload: beer,
});

export const startLoadingBeer = () => ({
    type: BEER_ACTIONS.inProcess
})
