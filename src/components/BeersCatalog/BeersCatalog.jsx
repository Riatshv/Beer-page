import { SearchBar } from "../SearchBar/SearchBar"
import { BeersContainer } from "../../containers/BeersContainer/BeersContainer"
import { useDispatch, useSelector } from "react-redux";
import { selectBeersEntities, selectBeersLoadingStatus, selectCurrentPage } from "../../store/modules/beers/selectors";
import { useEffect, useMemo } from "react";
import { changeSearchWord, loadBeers, loadBeersFromSearchBar } from "../../store/modules/beers/actions";
import { addBeersForSearch, loadSearchingBeers, searchBeer } from "../../store/modules/search/actions";
import { selectSearch } from "../../store/modules/search/selectors";
import { LOADING_STATUS } from "../../constants/loadingStatus";
import { store } from "../../store/store";
import { NavBar } from "../NavBar/NavBar";
import { PAGE_INFORMATION } from "../../constants/pageInformation";
import { NavBarContainer } from "../../containers/NavBarContainer/NavBarContainer";

export const BeersCatalog = () => {
    const dispatch = useDispatch();

    const onInputWord = (value) => {
        dispatch(loadSearchingBeers(value))
    }

    const currentPage = useSelector((state) => selectCurrentPage(state))

    const page = Math.ceil(PAGE_INFORMATION.maxBeersCount/PAGE_INFORMATION.beersPerPage)
    const restBeers = PAGE_INFORMATION.maxBeersCount % PAGE_INFORMATION.beersPerPage;
    const beersPerPage = PAGE_INFORMATION.beersPerPage;

    const onSwitchPage = (beersPerPage, ndx, page, restBeers) => {
        if (ndx !== page - 1 || restBeers === 0) {
            dispatch(loadBeers(ndx + 1, beersPerPage))
        } else {
            dispatch(loadBeers(ndx + 1, restBeers))
        }
        
    }


    return (
        <section>
            <SearchBar onInputWord={onInputWord}></SearchBar>
            <BeersContainer ></BeersContainer>
            <NavBarContainer page={page} onSwitchPage={onSwitchPage} restBeers={restBeers} beersPerPage={beersPerPage} currentPage={currentPage}></NavBarContainer>
        </section>
    )
}