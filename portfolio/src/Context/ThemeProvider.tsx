import ThemeContext, { Theme } from "./ThemeContext"
import React, { useState } from "react";


const ThemeProvider = (props) => {
    const setTheme = (theme: Theme) => {
        setState({ ...state, theme: theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT })
    }
    const initState = {
        theme: Theme.LIGHT,
        toggleTheme: setTheme
    }
    const [state, setState] = useState(initState)

    return (
        <ThemeContext.Provider value={state} >
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;