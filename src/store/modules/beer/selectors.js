export const selectBeer = (state) => state.beer;

export const selectBeerEntities = (state) => selectBeer(state).entities;

export const selectBeerLoadingStatus = (state) => selectBeer(state).loadingStatus;
