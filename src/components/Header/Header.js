import React from 'react'
import './Header.css';
import logo from '../../assets/logo-inicio1.png';
import NavBar from '../../components/NavBar/NavBar';

function Header() {
    return (
        <header>
            <div className="containerLogo">
                <img src={logo} alt=""/> 
                <h1>Artículos de repostería</h1>
            </div>
            <NavBar />
            
        </header>
    )
}

export default Header
