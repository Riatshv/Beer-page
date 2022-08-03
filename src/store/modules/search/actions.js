export const SEARCH_ACTIONS = {
    searchBeer: "searchBeer",
    loadBeers: "loadBeers",
    successSearch: "successSearch",
    failedSearch: "failedSearch",
    inProcess: "inProcess",
    changePage: "changePage",
    changeBeers: "changeBeers"
}


export const loadSearchingBeers = (word) => ({
    type: SEARCH_ACTIONS.searchBeer,
    payload: word,
})

export const startLoadingBeersFromSearch = () => ({
    type: SEARCH_ACTIONS.inProcess,
});

export const successLoadingBeersFromSearch = (beers, searchingWord) => ({
    type: SEARCH_ACTIONS.successSearch,
    payload: {
        beers, 
        searchingWord
    }
})

export const failedLoadingBeersFromSearch = () => ({
    type: SEARCH_ACTIONS.failedSearch,
})

export const changeSearchPage = (value) => ({
    type: SEARCH_ACTIONS.changePage,
    payload: value,
})

export const changeBeersRendering = (value) => ({
    type: SEARCH_ACTIONS.changeBeers,
    payload: value,
})
