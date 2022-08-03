import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import BeerBackground from "../../images/beer-background.webp"
import Bubbles from "../../images/bubbles.webp"
import { loadBeers } from "../../store/modules/beers/actions"

export const Banner =() => {
    const dispatch = useDispatch();
    return (
        <div className="beerImg">
            <img src={Bubbles} className="beerImg__bubbles" alt=""></img>
            <div className="beerImg__desc">
                <div className="beerImg__box">
                    <div className="beerImg__title">
                        New Beers
                    </div>
                    <div className="beerImg__subTitle">
                        Available on next day delivery!
                    </div>
                </div>

                <div className="beerImg__button">
                    <Link to="/catalog" className="beerImg__button-title" onClick={() => dispatch(loadBeers())}>
                        Click Here!
                    </Link>
                </div>
            </div>
            <img src={BeerBackground} className = "beerImg__img" alt="">

            </img>
        </div>
    )
}