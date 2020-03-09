import React, { useState, useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles, ThemeProvider } from '@material-ui/core/styles';
import customSwitchStyles from './customSwitchStyles';
import clsx from 'clsx';
import ThemeContext, { Theme } from '../../Context/ThemeContext';


interface ICustomSwitchProps {
    classes?: any;
    className?: any;
    handler?: any;
}



const CustomSwitch: React.FunctionComponent<ICustomSwitchProps> = (props) => {
    const { classes, className } = props;
    const [isChecked, setCheck] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheck(event.target.checked);
        props.handler(event.target.checked ? Theme.DARK : Theme.LIGHT);
    }
    return (
        <Switch
            checked={isChecked}
            color='secondary'
            className={classes.switchBase}
            onChange={handleChange}
        />
    )
};

export default withStyles(customSwitchStyles)(CustomSwitch);
