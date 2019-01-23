import React, {Component} from 'react';

class Nav extends Component {
    render(){
        return (
        <div className="nav-background">
          <a className="header-link" href="/#/"><div className="header-padding">
          <h1><img src={require('./programmer.svg')} alt="select logo" height="75px" width="75px"/>Lars Mackenzie</h1> 
          </div></a>
                <nav className="flex-box-evenly">
                    <div className="nav-item"><a href="/">About</a></div>
                    <div className="nav-item"><a href="/#/projects">Projects</a></div>
                    <div className="nav-item"><a href="/#/resume">Resume</a></div>
                    <div className="nav-item"><a href="/#/contact">Contact</a></div>
                </nav>
        </div>
        );
    }
}
export default Nav; 