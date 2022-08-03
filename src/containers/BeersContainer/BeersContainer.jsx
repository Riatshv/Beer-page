import { useEffect} from "react"
import { Beers } from "../../components/Beers/Beers"
import {useDispatch, useSelector } from "react-redux"
import { loadBeers } from "../../store/modules/beers/actions";
import { selectBeersEntities, selectBeersLoadingStatus, selectSearchWord } from "../../store/modules/beers/selectors";
import { LOADING_STATUS } from "../../constants/loadingStatus";
import { selectSearch } from "../../store/modules/search/selectors";
import { PAGE_INFORMATION } from "../../constants/pageInformation";
import { FailedLoading } from "../../components/FailedLoading/FailedLoading";
import { Loading } from "../../components/Loading/Loading";


export const BeersContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (Object.keys(beers).length === 0) {
            dispatch(loadBeers(1, PAGE_INFORMATION.beersPerPage));
        }
    }, [])

    const beers = useSelector((state) => selectBeersEntities(state))
    const beersLoadingStatus = useSelector((state)=> selectBeersLoadingStatus(state));

    if (beersLoadingStatus === LOADING_STATUS.failedLoading) {
        return (
            <FailedLoading></FailedLoading>
        )
    }

    if (beersLoadingStatus === LOADING_STATUS.inProcess) {
        return (
            <Loading></Loading>
        )
    }


    return (
        <Beers 
            beers={beers} 
        >
            
        </Beers>
    )
}