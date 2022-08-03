import "./styles.css"

export const BeerCardDescription = ({name, unit, value, foodPairing, tagline, description}) => {
    return (
        <div className="beerCardDescription">
            <h2>{name}</h2>
            <p className="beerCardDetail__tagline">{`"${tagline}"`}</p>
            <div className="beerCardDetail__volume">
                <div className="beerCardDetail__volume-title">Volume:</div>
                <div>{value} {unit}</div>
            </div>
            <div className="beerCardDetail__foodPairing">
                <h3>Try it with:</h3>
                {foodPairing &&
                <ul className="beerCardDetail__foodPairing-list">
                    {foodPairing.map((foodPair, index) => {
                        return (
                            <li 
                                key={index}
                                className="beerCardDetail__foodPairing-item"
                            >{foodPair}</li>
                        )
                    })}
                </ul>}
            </div>
            <p>{description}</p>
        </div>
    )
}