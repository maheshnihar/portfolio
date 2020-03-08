import React, { useState } from 'react';
import './MobileMenu.css';
import Logo from '../../images/thor2.png';
//import MenuIcon from '../images/hamburger.png';
import MobileMenuDrawer from './MobileMenuDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import CustomSwitch from '../Common/CustomSwitch';

const MobileMenu: React.FunctionComponent = () => {

    const [visible, setDrawer] = useState(false)
    return (
        <div>
            <div className="mobileHeader">
                <MenuIcon fontSize='large' onClick={() => setDrawer(true)} />
                <div className="mobileHeaderLogo">
                    <img src={Logo} alt="thor" />
                </div>
                <CustomSwitch />
            </div>
            {visible && <MobileMenuDrawer open={visible} closeDrawer={() => setDrawer(false)} />}
        </div>
    )
}

export default MobileMenu;