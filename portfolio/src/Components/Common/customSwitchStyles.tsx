import { purple } from "@material-ui/core/colors";

const customSwitchStyles = {
    switchBase: {
        color: purple[300],
        '&$checked': {
            color: purple[500],
        },
        '&$checked + $track': {
            backgroundColor: purple[500],
        }
    }
}

export default customSwitchStyles;