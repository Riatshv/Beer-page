import "./styles.css";

import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSearchWord } from "../../store/modules/beers/selectors";

export const BeerCard = ({name, description, imgSrc, id}) => {
    return (
        <Link to={`/catalog/${id}`} className="beerCardContainer">
            <div className="beerImgContainer">
                <img className="beerImgs" src={imgSrc} alt=""></img>
            </div>
            <h2 className="beerName">{name}</h2>
            <p className="beerDescription">{description}</p>
        </Link>
    )
}