import * as React from 'react';
import './AboutMe.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import CallIcon from '@material-ui/icons/Call';
import { IconButton } from '@material-ui/core';

export interface IAboutMeProps {
}

const AboutMe: React.FunctionComponent<IAboutMeProps> = (props) => {
    return (
        <div className='aboutme'>
            <p>Mahesh Palem</p>
            <div>
                <IconButton size='small' onClick={() => { window.location.href = "tel: 123-456-7890" }}>
                    <CallIcon />
                </IconButton>
                <span>(216)496-3321</span>
            </div>
            <div className='social'>
                <IconButton><GitHubIcon /></IconButton>
                <IconButton><LinkedInIcon /></IconButton>
                <IconButton><InstagramIcon /></IconButton>
            </div>
        </div >
    );
}


export default AboutMe;