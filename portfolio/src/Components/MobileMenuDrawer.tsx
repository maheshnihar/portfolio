import React, { useState } from 'react';
import './MobileMenuDrawer.css';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';


interface MobileMenuDrawerProps {
    closeDrawer: any;
    open: boolean;
}
const MobileMenuDrawer: React.FunctionComponent<MobileMenuDrawerProps> = (props) => {
    const [showDrawer, SetDrawer] = useState(props.open);
    return (
        <div>
            {showDrawer &&
                <CSSTransition
                    in={showDrawer}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={() => SetDrawer(true)}
                    onExited={() => SetDrawer(false)}
                >
                    <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn" onClick={props.closeDrawer} >&times;</a>
                        <Link to='/' onClick={props.closeDrawer}>Summary</Link>
                        <Link to='/experience' onClick={props.closeDrawer}>Experience</Link>
                        <Link to='/projects' onClick={props.closeDrawer}>Projects</Link>
                        <Link to='/skills' onClick={props.closeDrawer}>Skills</Link>
                        <Link to='/contact' onClick={props.closeDrawer}>Contact</Link>
                    </div>
                </CSSTransition>
            }
        </div>
    )
}

export default MobileMenuDrawer;