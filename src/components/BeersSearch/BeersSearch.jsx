import { BeersContainer } from "../../containers/BeersContainer/BeersContainer"
import { BeersCatalog } from "../BeersCatalog/BeersCatalog"
import { NavBar } from "../NavBar/NavBar"
import { Beers } from "../Beers/Beers"
import { PAGE_INFORMATION } from "../../constants/pageInformation"
import { NavBarContainer } from "../../containers/NavBarContainer/NavBarContainer"
import {useDispatch} from "react-redux"
import { changeBeersRendering, changeSearchPage } from "../../store/modules/search/actions"
import { SuccessSearching } from "../SuccessSearching/SuccessSearching"


export const BeersSearch = ({beersSlice, page, currentPage, searchingWord, beersLength}) => {

    const dispatch = useDispatch();

    const onSwitchPage = ( ndx )  => {
        dispatch(changeSearchPage(ndx + 1));
        dispatch(changeBeersRendering(ndx + 1))
    }
    return (
        <section>
            <SuccessSearching searchingWord={searchingWord} beersLength={beersLength}></SuccessSearching>
            <Beers beers={beersSlice}></Beers>
            {beersLength >= PAGE_INFORMATION.beersPerPage && 
                <NavBarContainer page={page} onSwitchPage={onSwitchPage} currentPage={currentPage} storeType="search"></NavBarContainer>}
        </section>
    )
}