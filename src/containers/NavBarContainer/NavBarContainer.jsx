import { NavBar } from "../../components/NavBar/NavBar"
import { selectCurrentPage } from "../../store/modules/beers/selectors"
import { useSelector } from "react-redux/es/exports"

export const NavBarContainer = ({onSwitchPage, restBeers, beersPerPage, page, currentPage, storeType}) => {
    return (
        <NavBar 
            page={page} 
            onSwitchPage={onSwitchPage} 
            restBeers={restBeers} 
            beersPerPage={beersPerPage} 
            currentPage={currentPage} 
            storeType={storeType}
        >
            
        </NavBar>
    )
}