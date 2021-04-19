import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search'

function Header() {
  return <nav className="header">

  {/* logo on the left -> img */}
  <Link to="/">
    <img
      className="header_logo"
      src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      alt=""
      />
  </Link>

  {/* Search box */}
  <div className="header_search">
    <input type="text" className="header_searchInput" />
    <SearchIcon className="header_searchIcon" />
  </div>
  {/* 3 Links on the right */}

  {/* Basket icon with number */}
    </nav>
}

export default Header
