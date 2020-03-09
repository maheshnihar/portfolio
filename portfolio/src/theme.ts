import { createMuiTheme } from "@material-ui/core";

const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
    }
});
const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

export const myTheme = {
    lightTheme,
    darkTheme
}