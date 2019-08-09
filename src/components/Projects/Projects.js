import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import ProjectView from '../ProjectView/ProjectView';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: true,
            web: ['web'],
            design: ['design'],
            research: ['research'],
            selected: ''
        }
    }
    linkClicked = (property) => {
        this.setState({
            ...this.state,
            selected: `this.state.${property}`,
            menu: false
        })
    }
    reset = () => {
        this.setState({
            ...this.state,
            menu: true,
            selected: ''
        })
    }
    render() {

        return (
            <section className="main">
                <Grid>
                <Row>
                    <a href="/#/"><h2 className="smaller-header" id="back-arrow">Lars Mackenzie</h2>
                    <h4 className="subheading">web developer + academic technologist</h4></a>
                </Row>
                    {this.state.menu ? (<div className="flex-box-evenly breathing-room">
                        <div onClick={()=>this.linkClicked('web')} className="choice">
                            <h3>Web Development</h3>
                        </div>
                        <div onClick={()=>this.linkClicked('design')} className="choice">
                            <h3>Instructional Design</h3>
                        </div>
                        <div onClick={()=>this.linkClicked('research')} className="choice">
                            <h3>Research</h3>
                        </div>
                    </div>) : (<div>
                        {/* display whatever link you just clicked */}
                       <div className="margin-top"><button onClick={this.reset}>Back</button></div> 
                        {this.state.selected === 'this.state.web' && <div>
                            {this.state.web.map((project, i) => {
                                return(<ProjectView project={project} key={i}/>)
                            })}
                        </div>}
                        {this.state.selected === 'this.state.design' && <div>
                        {this.state.design.map((project, i) => {
                                return(<ProjectView project={project} key={i}/>)
                            })}
                        </div>}
                        {this.state.selected === 'this.state.research' && <div>
                        {this.state.research.map((project, i) => {
                                return(<ProjectView project={project} key={i}/>)
                            })}
                        </div>}
                        </div>)}
                  
                </Grid>
            </section>
        );
    }
}

export default Projects; 