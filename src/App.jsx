import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { Layout } from "./components/Layout/Layout"
import { BeerPage } from "./pages/BeerPage/BeerPage"
import { HomePage } from "./pages/HomePage/HomePage"

export const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <Layout>
                    <Routes>
                        <Route path="/Beer-page" element={<HomePage></HomePage>}>

                        </Route>

                        <Route path="/Beer-page/catalog/*" element={<BeerPage></BeerPage>}>

                        </Route>
                    </Routes>
                </Layout>
            </Provider>
        </Router>
    )
}