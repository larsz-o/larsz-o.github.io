import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import DetailView from './components/DetailView/DetailView';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={HomePage}/>
          <Route path="/:id" component={DetailView}/>
          <Route render={() => <h1>404: Page not found</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
