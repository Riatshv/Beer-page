import { useRef } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export const SearchBar = ({onInputWord}) => {
    const ref = useRef(null);
    const navigate = useNavigate()
    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Введите название пива"
                onKeyDown={(e) => {
                    if (e.target.value === "") {
                        return
                    }

                    if (e.key === "Enter") {
                        onInputWord(ref.current.value);
                        navigate(`/catalog/search`, {ref: ref.current.value})
                    }
                }}
                ref = {ref}
                >
                
            </input>
            <div onClick={() => {
                if (ref.current.value === "") {
                    return;
                }
                onInputWord(ref.current.value);
                navigate(`/catalog/search`)
            }

            }>Search</div>
        </div>

    );
}