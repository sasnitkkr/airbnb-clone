import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';

function Header() {
  return (
    <div className="header">
      {/* Section 1:  Icon */}
      <img
        className="header__icon"
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt="airbnb icon"
      />

      {/* Section 2:  Icon */}
      <div className="header__center">
        <input type="text"></input>
        <SearchIcon />
      </div>

      <div className="header__right">
        <LanguageIcon/>
        <ExpandMoreIcon/>
        <Avatar/>
      </div>

    </div>
  );
}

export default Header;
