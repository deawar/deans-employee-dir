import React, { useContext } from 'react';
import "../styles/SearchName.css";
import DataContext from "../utils/DataContext";

const SearchName = () => {
    const context = useContext(DataContext);
    return(
        // <div class="row input-group">
        <form class="col s12 input-group hoverable">
            <div class="input-field col s6 searchbox">
              <input 
              className="form-control mr-sm-6" 
              placeholder="                 Search By Name" 
              id="" 
              type="search"
              aria-label="Search"
              onChange={e => context.handleSearchChange(e)} />
              <label for="search"></label>
            </div>
        </form>
        // </div>
      

        // <div className="searchbox">
        //     <div className="input-group">
        //         <div className="input-group-prepend">
        //             <span className="input-group-text" id="">
        //                 Search
        //             </span>
        //         </div>
        //         <input
        //         className="form-control mr-sm-2"
        //         type="search"
        //         placeholder="  Search By Name"
        //         aria-label="Search"
        //         onChange={e => context.handleSearchChange(e)}
        //     />
        //     </div>
        // </div>
    );
}

export default SearchName;