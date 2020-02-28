import React from 'react';
import './DesktopMenu.css';
import Logo from '../images/thor.png';


const DesktopMenu: React.FunctionComponent<{}> = () => {
    return (
        <div id='leftmenu' className='leftmenu'>
            <img src={Logo} alt="thor" />
            <a href=''>Summary</a>
            <a href=''>Experience</a>
            <a href=''>Projects</a>
            <a href=''>Skills</a>
            <a href=''>Contact</a>
        </div>
    )
}

export default DesktopMenu;