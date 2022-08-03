import { Banner } from "../Banner/Banner"
import "./styles.css"

export const WelcomeDescription = () => {
    return (
        <div className="beer">
            <h1 className="beer__header">Cozy Home Beer. Chill Better.</h1>
            <Banner></Banner>
        </div>
    )
}