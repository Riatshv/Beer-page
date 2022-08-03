import "./styles.css"

export const SuccessSearching = ({searchingWord, beersLength}) => {
    return (
        <div className="success-loading">
            According to your request 
            <span className="searching-word"> "{searchingWord}" </span>
            there were {beersLength} products:
        </div>
    )
}