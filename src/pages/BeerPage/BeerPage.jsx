
import { Layout } from "../../components/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BeersCatalog } from "../../components/BeersCatalog/BeersCatalog"
import { BeerCardDetailContainer } from "../../containers/BeerCardDetailContainer/BeerCardDetailContainer";
import { BeersSearch } from "../../components/BeersSearch/BeersSearch";
import { BeersSearchContainer } from "../../containers/BeersSearchContainer/BeersSearchContainer";

export const BeerPage = () => {
    return (
        <Routes>
            <Route path="/" element={<BeersCatalog></BeersCatalog>}>
                
            </Route>

            <Route path="/:id" element={<BeerCardDetailContainer></BeerCardDetailContainer>}>

            </Route>

            <Route path="/search" element={<BeersSearchContainer></BeersSearchContainer>}>

            </Route>
        </Routes>
    );
}