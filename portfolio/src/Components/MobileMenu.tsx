import React, { useState } from 'react';
import './MobileMenu.css';
import Logo from '../images/thor.png';
import MenuIcon from '../images/hamburger.png';
import MobileMenuDrawer from './MobileMenuDrawer';

const MobileMenu: React.FunctionComponent = () => {

    const [visible, setDrawer] = useState(false)
    return (
        <div>
            <div className="mobileHeader">
                <a href="#" className='hamburger' onClick={() => setDrawer(true)}>
                    <img src={MenuIcon} alt="" />
                </a>
                <div className="mobileHeaderLogo">
                    <img src={Logo} alt="thor" />
                </div>
            </div>
            {visible && <MobileMenuDrawer open={visible} closeDrawer={() => setDrawer(false)} />}
        </div>
    )
}

export default MobileMenu;