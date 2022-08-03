import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defaultStepForBeers } from "../constants/defaultStep";
import { changeNumberOfMaxBeers } from "../store/modules/beers/actions";
import { selectMaxNumberOfBeers } from "../store/modules/beers/selectors";

export const useScrollLoading = ( {beersArrayLength} ) => {

    const dispatch = useDispatch();
    const maxNumberOfBeers = useSelector((state) => selectMaxNumberOfBeers(state));


    const onScrollCallback = useCallback(() => {
        
        const documentHeight = document.documentElement.scrollHeight;
        const documentScrollTop = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.clientHeight;
        const restScroll = documentHeight - documentScrollTop - windowHeight;
        
        if (restScroll > 100) {
            return;
        }



        dispatch(changeNumberOfMaxBeers(defaultStepForBeers));
    }, [beersArrayLength])

    useEffect(() => {
        window.addEventListener("scroll", onScrollCallback);

        if (beersArrayLength <= maxNumberOfBeers) {
            window.removeEventListener("scroll", onScrollCallback)
        }

        return() => {
            window.removeEventListener("scroll", onScrollCallback)
        }
    }, [onScrollCallback])


    return { maxNumberOfBeers }
}