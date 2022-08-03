export const selectBeers = (state) => state.beers;

export const selectBeersEntities = (state) => selectBeers(state).entities;

export const selectBeersLoadingStatus = (state) => selectBeers(state).loadingStatus;

export const selectBeerById = (state, id) => selectBeersEntities(state)[id];


export const selectMaxNumberOfBeers = (state) => selectBeers(state).maxNumberOfBeers;


export const selectCurrentPage = (state) => selectBeers(state).currentPage