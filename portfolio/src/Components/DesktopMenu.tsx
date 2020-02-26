import React from 'react';
import './DesktopMenu.css';
import Logo from '../images/thor.png';
import MenuIcon from '../images/hamburger.png';


const handleMenuClick = () => {

}
const DesktopMenu: React.FunctionComponent<{}> = () => {
    return (
        <div id='parent' className='parent'>
            <div id='leftmenu' className='leftmenu'>
                <img src={Logo} alt="thor" />
                <a href=''>Summary</a>
                <a href=''>Experience</a>
                <a href=''>Projects</a>
                <a href=''>Skills</a>
                <a href=''>Contact</a>
            </div>

            <div id='content' className='content'>Content</div>
        </div>
    )
}

export default DesktopMenu;