import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Contact from './components/Contact/Contact'; 
import Projects from './components/Projects/Projects'; 
import Resume from './components/Resume/Resume'; 
import Services from './components/Services/Services'; 
import ServicesInfo from './components/Services/ServicesInfo'; 
import Footer from './components/Footer/Footer';
import Packages from './components/Packages/Packages'; 

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/about" component={Resume}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/more-info" component={ServicesInfo}/>
          <Route exact path="/packages" component={Packages}/>
          <Route render={() => <h1>404: Page not found</h1>} />
        </Switch>
      </Router>
      <Footer/>
      </div>
     
    );
  }
}

export default App;
