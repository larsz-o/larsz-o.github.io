import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './components/Projects/Projects'; 
import About from './components/About/About'; 



class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route exact path="/projects" component={Projects}/>
          <Route render={() => <h1>404: Page not found</h1>} />
        </Switch>
      </Router>
      </div>
     
    );
  }
}

export default App;
