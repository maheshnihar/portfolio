import { createContext } from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}
export interface IThemeContextProps {
    theme: Theme,
    toggleTheme?: (theme: Theme) => void
}

const defaultThemeContext: IThemeContextProps = {
    theme: Theme.LIGHT
}

const ThemeContext = createContext<IThemeContextProps>(defaultThemeContext);

export default ThemeContext;
