import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import customSwitchStyles from './customSwitchStyles';
import clsx from 'clsx';


interface ICustomSwitchProps {
    classes?: any;
    className?: any;

}

const CustomSwitch: React.FunctionComponent<ICustomSwitchProps> = (props) => {
    const { classes, className } = props;
    return (
        <Switch color='primary' classes={classes.switchBase} />
    )
};


export default withStyles(customSwitchStyles)(CustomSwitch);
