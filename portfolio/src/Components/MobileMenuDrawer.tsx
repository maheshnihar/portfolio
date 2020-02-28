import React from 'react';
import './MobileMenuDrawer.css';

interface MobileMenuDrawerProps {
    closeDrawer: any;
}
const MobileMenuDrawer: React.FunctionComponent<MobileMenuDrawerProps> = (props) => {
    return (
        <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={props.closeDrawer} >&times;</a>
            <a href='#'>Summary</a>
            <a href='#'>Experience</a>
            <a href='#'>Projects</a>
            <a href='#'>Skills</a>
            <a href='#'>Contact</a>
        </div>
    )
}

export default MobileMenuDrawer;