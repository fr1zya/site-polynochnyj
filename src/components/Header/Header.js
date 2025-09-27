import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';

function Header(){
    return(
        <header className="header-container">
        <div className="logo-container">
            <Link to='/'><img src="./logo_main_nofont.png" alt="Stalker RP logo" className="logo-image" /></Link>
            <span className="logo-text">STALKER - RP | Polynochnij Project</span>
        </div>
            <nav className="navigation">
                <Link to='/' className="nav-link">Главная</Link>
                <Link to='/rule' className="nav-link">Правила</Link>
                <Link to='/lore' className="nav-link">Лор</Link>
                <Link to='/donate' className="nav-link">Поддержка проекта</Link>
            </nav>
        </header>
    );
}

export default Header;