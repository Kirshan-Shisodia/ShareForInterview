import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to='/'><img className="header_icon" src='https://i.postimg.cc/85VPJ0cC/movies-ground-logo-text-resize.png' alt="logo" /></Link>
                <Link to='/movies/movie' style={{textDecoration: "none"}}><span>Movies</span></Link>
                <Link to='/movies/webseries' style={{textDecoration: "none"}}><span>Web Series</span></Link>
            </div>
        </div>
    );
}

export default Header;