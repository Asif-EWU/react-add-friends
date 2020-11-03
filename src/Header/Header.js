import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="navbar">
            <h1 className="title">friendsBook</h1>
            <ul className="header-ul">
                <li>Home</li>
                <li>Friends</li>
                <li>Profile</li>
            </ul>
        </div>
    );
};

export default Header;