import React from 'react';
import './DesktopMenu.css';
import Logo from '../../images/thor2.png';
import { Link } from 'react-router-dom';
import CustomSwitch from '../Common/CustomSwitch';



const DesktopMenu: React.FunctionComponent<{}> = () => {
    return (
        <div id='leftmenu' className='leftmenu'>
            <img src={Logo} alt="thor" />
            <Link to='/'>Summary</Link>
            <Link to='/experience'>Experience</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/contact'>Contact</Link>
            <CustomSwitch />
        </div>
    )
}

export default DesktopMenu;