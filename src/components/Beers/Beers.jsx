import { useSelector } from "react-redux";
import { useScrollLoading } from "../../hooks/useScrollLoading";
import { selectSearchWord } from "../../store/modules/beers/selectors";
import { store } from "../../store/store";
import { BeerCard } from "../BeerCard/BeerCard";
import "./styles.css"

export const Beers = ({beers}) => {
    const beersArrayLength = Object.keys(beers).length;


    const { maxNumberOfBeers } = useScrollLoading( {beersArrayLength} )

    const beersSlice = Object.values(beers).slice(0, maxNumberOfBeers);
    return (
        <div className="beersList">
            {Object.values(beersSlice).map(( {name, description, image_url, id} ) => {
                return (
                    <BeerCard 
                        key={id}
                        id={id} 
                        imgSrc={image_url} 
                        name={name} 
                        description={description}
                    >
                        
                    </BeerCard>
                )
                }
            )}
        </div>
    );
}