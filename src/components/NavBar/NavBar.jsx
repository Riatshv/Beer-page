import { useDispatch } from "react-redux"
import { PAGE_INFORMATION } from "../../constants/pageInformation";
import { loadBeers } from "../../store/modules/beers/actions";
import { Page } from "../Page/Page"
import "./styles.css"

export const NavBar = ({page, onSwitchPage, restBeers, beersPerPage, currentPage, storeType}) => {
    return (
        <div className="navbar">
            {new Array(page).fill(undefined).map((__, ndx) => {
                return (
                    <Page
                        isActive={currentPage === ndx + 1 ? "isActive" : ""}
                        onSwitchPage = {onSwitchPage}
                        restBeers={restBeers}
                        beersPerPage={beersPerPage}
                        key = {ndx} 
                        ndx={ndx}
                        page = {page}
                        storeType={storeType}
                    >

                    </Page>
                )
            })}
        </div>
    )
}