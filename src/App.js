import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './components/Contact/Contact'; 
import Projects from './components/Projects/Projects'; 
import About from './components/About/About'; 
import Footer from './components/Footer/Footer';
import Resume from './components/Resume/Resume'; 


class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/contact" component={Contact}/>
          <Route render={() => <h1>404: Page not found</h1>} />
        </Switch>
      </Router>
      <Footer/>
      </div>
     
    );
  }
}

export default App;
