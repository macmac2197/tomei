import React from 'react';
import logo from '../../assets/Logo.png';
import './index.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo" />
        </div>
    )
}

export default Header