import "./styles.css"
import { useNavigate } from "react-router-dom"

export const FailedSearching = ({searchingWord}) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="failed-searching">
                Nothing was found for your search 
                <span className="searching-word"> "{searchingWord}" </span>
                
            </div>
            <div className="back-button" onClick={() => navigate("/catalog")}>Back to catalog</div>
        </div>

    )
}