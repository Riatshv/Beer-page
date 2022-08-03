import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { BeersSearch } from "../../components/BeersSearch/BeersSearch"
import { FailedLoading } from "../../components/FailedLoading/FailedLoading"
import { FailedSearching } from "../../components/FailedSearching/FailedSearching"
import { Loading } from "../../components/Loading/Loading"
import { LOADING_STATUS } from "../../constants/loadingStatus"
import { PAGE_INFORMATION } from "../../constants/pageInformation"
import { selectBeerEntities } from "../../store/modules/beer/selectors"
import { loadBeersFromSearchBar } from "../../store/modules/beers/actions"
import { selectBeersEntities } from "../../store/modules/beers/selectors"
import { loadSearchingBeers } from "../../store/modules/search/actions"
import { loadBeersForSearch } from "../../store/modules/search/middlewares/loadBeersForSearch"
import { selectBeerCountOnPage, selectBeersFromSearch, selectCurrentPageFromSearch, selectLeftIndex, selectRightIndex, selectSearchingWord, selectSearchLoadingStatus, selectStoreType } from "../../store/modules/search/selectors"
import { store } from "../../store/store"

export const BeersSearchContainer = () => {

    const beers = useSelector((state) => selectBeersFromSearch(state));
    const currentPage = useSelector((state) => selectCurrentPageFromSearch(state));
    const leftIndex = useSelector((state) => selectLeftIndex(state));
    const rightIndex = useSelector((state) => selectRightIndex(state));
    const searchLoadingStatus = useSelector((state) => selectSearchLoadingStatus(state));
    const searchingWord = useSelector((state) => selectSearchingWord(state));
    const beersLength = Object.values(beers).length 
    const dispatch = useDispatch()

    // useEffect(() => {
    //     if (beersLength === 0) {
    //         dispatch(loadSearchingBeers(searchingWord));
    //     }
    // }, [])

    if (searchLoadingStatus === LOADING_STATUS.failedLoading) {
        return <FailedLoading></FailedLoading>
    }

    if (searchLoadingStatus === LOADING_STATUS.inProcess) {
        return <Loading></Loading>
    }

    if (beersLength === 0) {
        return <FailedSearching searchingWord={searchingWord}></FailedSearching>
    }

    const beersSlice = Object.values(beers).slice(leftIndex, rightIndex);
    const page = Math.ceil(beersLength / PAGE_INFORMATION.beersPerPage);


    
    return (
        <BeersSearch 
            beers = {beers} 
            beersSlice={beersSlice} 
            page ={page} 
            currentPage={currentPage}
            searchingWord={searchingWord}
            beersLength={beersLength}
        ></BeersSearch>
        )
}