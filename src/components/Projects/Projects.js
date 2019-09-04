import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import ProjectView from '../ProjectView/ProjectView';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: true,
            web: [{ title: 'Fitness Session Tracker', url: 'https://stormy-citadel-76866.herokuapp.com/#/', img: 'https://fitnessmeetswellness.com/wp-content/uploads/2019/04/larger-logo-test.jpg', img_desc: '', description: 'I built this tool for a personal trainer who was looking for an easier and less awkward way to remind her clients to pay her for their sessions. This app allows the trainer to track how many sessions a client has paid for and track when sessions are used. When a client has 3 or fewer prepaid sessions remaining, the trainer is prompted to email the client a pre-drafted reminder to bring payment the next time they come in for a session. Create an account and try it out yourself!' },
            ],
            design: [{ title: '', url: '', img: '', img_desc: '', description: '' }],
            research: [{ title: '', url: '', img: '', img_desc: '', description: '' }],
            selected: '',
        }
    }
    linkClicked = (property) => {
        this.setState({
            ...this.state,
            selected: property,
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
                        <div onClick={() => this.linkClicked('web')} className="choice">
                            <h3>Web Development</h3>
                        </div>
                        <div onClick={() => this.linkClicked('design')} className="choice">
                            <h3>Instructional Design</h3>
                        </div>
                        <div onClick={() => this.linkClicked('research')} className="choice">
                            <h3>Research</h3>
                        </div>
                    </div>) : (<div>
                        {/* display whatever link you just clicked */}
                        <div className="margin-top"><span className="link" onClick={() => this.reset()}> &laquo; Return to Projects</span></div>
                        <div className="flex-box">
                            {this.state.selected === 'web' && <div>
                                {this.state.web.map((project, i) => {
                                    return (<ProjectView project={project} key={i} />)
                                })}
                            </div>}
                            {this.state.selected === 'design' && <div>
                                {this.state.design.map((project, i) => {
                                    return (<ProjectView project={project} key={i} />)
                                })}
                            </div>}
                            {this.state.selected === 'research' && <div>
                                {this.state.research.map((project, i) => {
                                    return (<ProjectView project={project} key={i} />)
                                })}
                            </div>}

                        </div>
                    </div>)}


                </Grid>
            </section>
        );
    }
}

export default Projects; 