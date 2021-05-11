import React from "react";
import "./Header.css";

import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";

function Header() {
    
    return(
        <div className="header">
            <div className="header_left">
                <SearchIcon />
                <input 
                placeholder="Search For Artist, Songs or Albums"
                type="text"
                />
            </div>
            <div className="header_right">
                <Avatar src="" alt="avatar" />
                <h4>Aleya</h4>
            </div>
           
        </div>
    )
}

export default Header;