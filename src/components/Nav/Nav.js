import React, {Component} from 'react';
class Nav extends Component {
    render(){
        return (
        <div>
          <a className="header-link" href="/#/"><div className="flex-box header-padding">
                <h1 className="jumbotron-heading">Lars Mackenzie | software solutions</h1>
            </div></a>
                <nav className="flex-box-evenly">
                    <div className="nav-item"><a href="/#/about">About</a></div>
                    <div className="nav-item"><a href="/#/projects">Projects</a></div>
                    <div className="nav-item"><a href="/#/services">Services</a></div>
                    <div className="nav-item"><a href="/#/contact">Contact</a></div>
                </nav>
        </div>
        );
    }
}
export default Nav; 