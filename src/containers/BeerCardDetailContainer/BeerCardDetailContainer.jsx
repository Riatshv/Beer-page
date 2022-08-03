import { BeerCardDetail } from "../../components/BeerCardDetail/BeerCardDetail";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadBeer } from "../../store/modules/beer/actions";
import { selectBeerEntities, selectBeerLoadingStatus } from "../../store/modules/beer/selectors";
import { useEffect } from "react";
import { LOADING_STATUS } from "../../constants/loadingStatus";
import { FailedLoading } from "../../components/FailedLoading/FailedLoading";
import { Loading } from "../../components/Loading/Loading";

export const BeerCardDetailContainer = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    let beer = useSelector(selectBeerEntities)

    useEffect(() => {
        dispatch(loadBeer(id));
    }, [])
    

    const loadingStatus = useSelector((state) => selectBeerLoadingStatus(state));
    
    if (loadingStatus === LOADING_STATUS.failedLoading) {
        return <FailedLoading></FailedLoading>
    }

    if (loadingStatus === LOADING_STATUS.inProcess) {
        return <Loading></Loading>
    }

    const {name, food_pairing, image_url, ingredients, volume, tagline, description} = beer

    return (
        <BeerCardDetail 
            name={name}
            foodPairing = {food_pairing}
            imgSrc = {image_url}
            ingredients = {ingredients}
            volume = {volume}
            tagline = {tagline}
            description={description}
        ></BeerCardDetail>
    )
}