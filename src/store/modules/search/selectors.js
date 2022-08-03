export const selectSearch = (state) => state.search;

export const selectBeersFromSearch = (state) => selectSearch(state).entities;

export const selectCurrentPageFromSearch = (state) => selectSearch(state).currentPage;

export const selectStoreType = (state) => selectSearch(state).type;

export const selectLeftIndex = (state) => selectSearch(state).leftIndex;

export const selectRightIndex = (state) => selectSearch(state).rightIndex;

export const selectSearchLoadingStatus = (state) => selectSearch(state).loadingStatus;

export const selectSearchingWord = (state) => selectSearch(state).searchingWord;