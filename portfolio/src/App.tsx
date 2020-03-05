import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import DesktopMenu from './Components/DesktopMenu';
import MobileMenu from './Components/MobileMenu';
import Summary from './Components/Content/Summary';
import Experience from './Components/Content/Experience';
import Projects from './Components/Content/Projects';
import Skills from './Components/Content/Skills';
import Contact from './Components/Content/Contact';
import AboutMe from './Components/Content/AboutMe';

function App() {
  return (
    <div className="App">
      <DesktopMenu />
      <MobileMenu />
      <div className="content">
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
  );
}

export default App;
