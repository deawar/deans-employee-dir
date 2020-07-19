import React, { useContext } from 'react';
import "../styles/SearchName.css";
import DataContext from "../utils/DataContext";

const SearchName = () => {
    const context = useContext(DataContext);
    return(
        <div className="searchbox">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">
                        Search
                    </span>
                </div>
                <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="  Search By Name"
                aria-label="Search"
                onChange={e => context.handleSearchChange(e)}
            />
            </div>
        </div>
    );
}

export default SearchName;