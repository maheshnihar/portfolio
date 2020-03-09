import React, { useState } from 'react';
import './DesktopMenu.css';
import Logo from '../../images/thor2.png';
import { Link } from 'react-router-dom';
import CustomSwitch from '../Common/CustomSwitch';
import { Theme } from '../../Context/ThemeContext';

interface IDeskTopMenuProps {
    themeHandler?: any
}

const DesktopMenu: React.FunctionComponent<IDeskTopMenuProps> = (props) => {
    const [currTheme, setCurrent] = useState(Theme.LIGHT);
    const toggleHandler = (theme: Theme) => {
        props.themeHandler(theme);
        setCurrent(theme);
    }
    return (
        <div id='leftmenu' className={`${currTheme === Theme.LIGHT ? 'leftmenu' : 'leftmenuDark'}`}>
            <img src={Logo} alt="thor" />
            <Link to='/'>Summary</Link>
            <Link to='/experience'>Experience</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/contact'>Contact</Link>
            <CustomSwitch handler={toggleHandler} />
        </div>
    )
}

export default DesktopMenu;