import { BeerCardDescription } from "../BeerCardDescription/BeerCardDescription";
import "./styles.css"


export const BeerCardDetail = ({name, imgSrc, foodPairing, tagline, volume, description}) => {
    const unit = volume?.unit;
    const value = volume?.value;

    return (
        <div className="beerCardDetailContainer">
            <div className="beerCardDetail__imgContainer">
                <img src={imgSrc} alt="" className="beerCardDetail__img"></img>
            </div>

            <BeerCardDescription
                name={name}
                foodPairing={foodPairing}
                tagline={tagline}
                unit={unit}
                value={value}
                description={description}
            ></BeerCardDescription>
        </div>
    );
}