import BeerLogo from "../../images/beer-logo2.png"
import "./styles.css";
import {Link} from "react-router-dom"

export const Header = () => {
    return (
        <header className="header">
            <Link to="/Beer-page">
                <img 
                    src={BeerLogo}
                    className="logo"
                    alt=""
                >
                </img>
            </Link>



            <Link to="/Beer-page">
                <div className="title">
                    Classical
                </div>
                <div className="title middle">
                    National
                </div>
                <div className="title low">
                    Beer
                </div>
            </Link>
        </header>
    )
}