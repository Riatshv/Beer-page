export const BEERS_ACTIONS = {
    loadBeers: "beers_actions/loadBeers",
    failedBeers: "beers_actions/failedBeers",
    successBeers: "beers_actions/successBeers",
    inProcess: "beers_actions/inProcess",
    changeNumberOfMaxBeers: "beers_actions/changeNumberOfMaxBeers",
    searchBeers: "beers_actions/searchBeers",
    changeSearchWord: "beers_actions/changeSearchWord"
};


export const loadBeers = (page, numberOfBeers) => ({
    type: BEERS_ACTIONS.loadBeers,
    payload: {
        page, 
        numberOfBeers
    }
});

export const failedBeers = () => ({
    type: BEERS_ACTIONS.failedBeers,
});

export const successBeers = (beers, page) => ({
    type: BEERS_ACTIONS.successBeers,
    payload: {
        beers,
        page,
    }    
});

export const startLoadingBeers = () => ({
    type: BEERS_ACTIONS.inProcess
})


export const changeNumberOfMaxBeers = (step) => ({
    type: BEERS_ACTIONS.changeNumberOfMaxBeers,
    payload: step,
})
