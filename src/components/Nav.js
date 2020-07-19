import React from "react";
import SearchName from "./SearchName.js";
// import SearchDOB from "./SearchDOB.js";
import "../styles/Nav.css";

function Nav() {
    return(
        <nav className="nav-wrapper navbar-expand-lg bg-light">
            <div className="input-group col-4">
                <SearchName />
            </div>
            <div className="collapse navbar-collapse row" id="navbarNav">
            </div>
        </nav>
    );
}

export default Nav;