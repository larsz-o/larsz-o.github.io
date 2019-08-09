import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import ProjectView from '../ProjectView/ProjectView';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: true,
            menu: true,
            web: false,
            design: false,
            research: false, 
            webProjects: [],
            designProjects: [],
            researchProjects: []
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
            <section className="main">
                <Grid>
                <Row>
                    <a href="/#/"><h2 className="smaller-header" id="back-arrow">Lars Mackenzie</h2>
                    <h4 className="subheading">web developer + academic technologist</h4></a>
                </Row>
                    {this.state.menu ? (<div className="flex-box-evenly breathing-room">
                        <div className="choice">
                            <h3>Web Development</h3>
                        </div>
                        <div className="choice">
                            <h3>Instructional Design</h3>
                        </div>
                        <div className="choice">
                            <h3>Research</h3>
                        </div>
                    </div>) : (<div className="flex-box-evenly">
                        {/* display whatever link you just clicked */}
                        <ProjectView/>
                    </div>)} 
                  
                </Grid>
            </section>
        );
    }
}

export default Projects; 