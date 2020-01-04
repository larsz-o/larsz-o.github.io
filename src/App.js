import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; 
import About from './components/About/About'; 
import FourOhFour from './components/404/404';
import Portfolio from './components/Portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route component={FourOhFour}/>
        </Switch>
      </Router>
     
    );
  }
}

export default App;
