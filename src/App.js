import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import About from './Components/About'
import Projects from './Components/Projects'

class App extends Component {

  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/projects' component={Projects}></Route>
        </Switch>
      </>
    );
  }
}

export default App
