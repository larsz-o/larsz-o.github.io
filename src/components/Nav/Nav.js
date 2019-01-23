import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: true
        }
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
    updatePredicate = () => {
        this.setState({
            isDesktop: window.innerWidth > 1024
        })
    }
    render() {
        let isDesktop = this.state.isDesktop;
        return (
            <div className="nav-background">
                <a className="header-link" href="/#/"><div className="header-padding">
                    <h1><img src={require('./programmer.svg')} alt="select logo" height="75px" width="75px" />Lars Mackenzie</h1>
                    {/* <h4 className="subheading">Academic/Technologist + Web Developer</h4> */}
                </div></a>
                {isDesktop ? (<nav className="flex-box-evenly nav-item">
                    <div><a href="/">About</a></div>
                    <div><a href="/#/projects">Projects</a></div>
                    <div><a href="/#/resume">Resume</a></div>
                    <div><a href="/#/contact">Contact</a></div>
                </nav>) : (<nav>
                    <NavDropdown eventKey={1} title="Menu" className="nav-drop" id="basic-nav-dropdown">
                        <div className="mobile-nav-item"><a href="/">About</a></div>
                        <div className="mobile-nav-item"><a href="/#/projects">Projects</a></div>
                        <div className="mobile-nav-item"><a href="/#/resume">Resume</a></div>
                        <div className="mobile-nav-item"><a href="/#/contact">Contact</a></div>
                    </NavDropdown>
                </nav>)}

            </div>
        );
    }
}
export default Nav; 