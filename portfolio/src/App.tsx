import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import DesktopMenu from './Components/Navigation/DesktopMenu';
import MobileMenu from './Components/Navigation/MobileMenu';
import Summary from './Components/Content/Summary';
import Experience from './Components/Content/Experience';
import Projects from './Components/Content/Projects';
import Skills from './Components/Content/Skills';
import Contact from './Components/Content/Contact';
import AboutMe from './Components/Content/AboutMe';
import { MuiThemeProvider } from '@material-ui/core';
import { myTheme } from './theme';
import { Theme } from "./Context/ThemeContext";

interface IAppProps {
  classes?: any;
  className?: any;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [currTheme, setTheme] = useState(Theme.LIGHT);
  const theme = (currTheme === Theme.DARK ? myTheme.darkTheme : myTheme.lightTheme);
  const themeHandler = (th: Theme) => {
    console.log('APP THEME....', th);
    setTheme(th);
  }
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <DesktopMenu themeHandler={themeHandler} />
        <MobileMenu themeHandler={themeHandler} />
        <div className={`${currTheme === Theme.LIGHT ? 'content' : 'contentDark'}`}>
          <AboutMe />
          <Switch>
            <Route exact path="/" component={Summary} />
            <Route path="/experience" component={Experience} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </MuiThemeProvider>

  );
}

export default App;
