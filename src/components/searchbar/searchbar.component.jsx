import React from "react";
import "./searchbar.css";

const SearchBar= (props) => {
    const {onChangeHandler,placeholder}=props;
    return(
        <div>
            <input 
                className={`search-box`}
                onChange={onChangeHandler} 
                type="search"
                placeholder={placeholder}
            />
           </div>
        );
}
export default SearchBar;