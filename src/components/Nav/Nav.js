import React, {Component} from 'react';

class Nav extends Component {
    render(){
        return (
        <div className="nav-background">
          <a className="header-link" href="/#/"><div className="header-padding">
          <h1><img src={require('./programmer.svg')} alt="select logo" height="75px" width="75px"/>Lars Mackenzie Designs</h1>
          <h4 className="subheading">Software Solutions for Small Businesses, Academics, Entreprenuers, and Non-Profits</h4>
            </div></a>
            
                <nav className="flex-box-evenly">
                    <div className="nav-item"><a href="/#/about">About</a></div>
                    <div className="nav-item"><a href="/#/services">Services</a></div>
                    <div className="nav-item"><a href="/#/projects">Projects</a></div>
                    <div className="nav-item"><a href="/#/contact">Contact</a></div>
                </nav>
        </div>
        );
    }
}
export default Nav; 