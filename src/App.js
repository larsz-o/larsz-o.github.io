import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import DetailView from './components/DetailView/DetailView';
import Contact from './components/Contact/Contact'; 
import Projects from './components/Projects/Projects'; 
import Resume from './components/Resume/Resume'; 
import Services from './components/Services/Services'; 

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/moredetails" component={DetailView}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/about" component={Resume}/>
          <Route exact path="/services" component={Services}/>
          <Route render={() => <h1>404: Page not found</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
