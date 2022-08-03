import "./styles.css"

export const Page = ({ndx, onSwitchPage, beersPerPage, page, isActive, storeType, restBeers}) => {
    return (
        <div
            onClick={() => {
                storeType === "search"?
                    onSwitchPage(ndx)
                :
                    onSwitchPage(beersPerPage, ndx, page, restBeers)
            }}

            className={["navigation", isActive].join(" ")}
        >
            {ndx + 1}
        </div>
    )
}