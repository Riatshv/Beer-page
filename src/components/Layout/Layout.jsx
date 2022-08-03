import { Header } from "../Header/Header";
import "./styles.css"

export const Layout = ({children}) => {
    return (
        <div className="container">
            <Header></Header>
            <main>{children}</main>
        </div>
    );
}