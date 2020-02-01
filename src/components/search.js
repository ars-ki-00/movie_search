import React, { useState } from 'react';

import './search.css';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInput = () => {
        setSearchValue("");
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInput();
    }

    return (
        <div className="search">
            <input
                type="text"
                className="search_input"
                value={searchValue}
                onChange={handleSearchInputChanges}
            />
            <input
                type="submit"
                value="SEARCH"
                className="search_button"
                onClick={callSearchFunction}
            />
        </div>
    )

}

export default Search;