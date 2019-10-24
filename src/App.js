import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; 
import About from './components/About/About'; 
import FourOhFour from './components/404/404';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route exact path="/" component={About}/>
      
          <Route exact path="/contact" component={Contact}/>
          <Route component={FourOhFour}/>
        </Switch>
      </Router>
      </div>
     
    );
  }
}

export default App;
