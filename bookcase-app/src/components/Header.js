import React from 'react';
import {Link} from 'react-router-dom';
import './HeaderStyle.css'

const Header = () => {
  return (
    <>
        <div className="navbar">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/bookcase" className="bookLink"> Bookcase</Link>
        </div>
    </>
  );
}

export default Header;