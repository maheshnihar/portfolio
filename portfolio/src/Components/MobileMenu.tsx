import React from 'react';
import './MobileMenu.css';
import Logo from '../images/thor.png';
import MenuIcon from '../images/hamburger.png';


const MobileMenu = () => {
    return (
        <div className="mobileHeader">
            <a href="#menu" className='hamburger'>
                <img src={MenuIcon} alt="" />
            </a>
            <div className="mobileHeaderLogo">
                <img src={Logo} alt="thor" />
            </div>

        </div>
    )
}

export default MobileMenu;