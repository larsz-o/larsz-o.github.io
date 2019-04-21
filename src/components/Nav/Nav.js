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
            isDesktop: window.innerWidth >= 1024
        })
    }
    render() {
        let isDesktop = this.state.isDesktop;
        return (
            <div className="nav-background">
                <a className="header-link" href="/#/"><div className="header-padding">
                    <h2 class="name-header">Lars Mackenzie</h2>
                    <h4 class="subheading">academic technologist + web developer</h4>
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