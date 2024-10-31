// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './Header.css'; // Asigură-te că importi stilurile

const Header = () => {
    return (
        <div className="header">
            <div className="title-nav">
                <h1 className="title">Tom Digital Artist</h1>
                <div className="nav">
                    <Link to="/" className="nav-button">Artworks</Link>
                    <Link to="/about" className="nav-button">About</Link>
                    <Link to="/contact" className="nav-button">Contact</Link>
                </div>
            </div>
            <Link to="/add-artwork" className="add-artwork-button">Add Artwork</Link>
        </div>
    );
};

export default Header;
