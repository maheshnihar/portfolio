import React, { useState } from 'react';
import './MobileMenuDrawer.css';
import { CSSTransition } from 'react-transition-group';



interface MobileMenuDrawerProps {
    closeDrawer: any;
    open: boolean;
}
const MobileMenuDrawer: React.FunctionComponent<MobileMenuDrawerProps> = (props) => {
    const [visible, SetDrawer] = useState(props.open);

    return (
        <CSSTransition
            in={true}
            timeout={350}
            classNames="display"
            unmountOnExit
            appear
        >
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={props.closeDrawer} >&times;</a>
                <a href='#'>Summary</a>
                <a href='#'>Experience</a>
                <a href='#'>Projects</a>
                <a href='#'>Skills</a>
                <a href='#'>Contact</a>
            </div>
        </CSSTransition>
    )
}

export default MobileMenuDrawer;