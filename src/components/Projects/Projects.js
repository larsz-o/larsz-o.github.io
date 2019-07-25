import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Diamonds from '../Diamonds/Diamonds'; 
import { HashLink as Link } from 'react-router-hash-link';

class Projects extends Component {
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
            <section className="main">
                {/* revise the content in this page */}
                <Grid>
                <Row>
                    <a href="/#/"><h2 className="smaller-header" id="back-arrow">Lars Mackenzie</h2>
                    <h4 className="subheading">web developer + academic technologist</h4></a>
                </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} lg={4}>
                            <h2 className="center">Projects</h2>
                        </Col>
                    </Row>

                    <Row>
                        {isDesktop ? (<div>
                            <Col xs={12} md={6} lg={4} className="breathing-room">
                                <p>I've worked on a number of projects where I've been responsible for integrating technology into teaching, building web applications, and promoting research through technology.</p>
                            </Col>
                            <Col xs={12} md={6} lg={8}>
                                <img src={require('../images/wireframe.jpg')} alt="computer" className="relative no-borders" responsive />
                            </Col></div>) :
                            (<div>
                                <Col xs={12} md={6} lg={4}>
                                    <h3>I've worked on a number of projects where I've been responsible for integrating technology into teaching, building web applications, and promoting research through technology.</h3>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                <div className="row-padding"></div>
                                 <Diamonds/>
                                </Col>
                            </div>)}
                    </Row>
                    {isDesktop && <Row>
                        <div className="row-padding"></div>
                    </Row>}
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} md={10} lg={8}>
                            <p>I've developed and facilitated trainings about digital storytelling and podcasting...</p>
                            <img src="https://res.cloudinary.com/dnrk3irn4/image/upload/v1548291805/imovie-min.png" alt="iMovie screenshot" className="relative" responsive />
                        </Col>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                        {!isDesktop && <Diamonds/>}
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} md={2} lg={4}>
                        </Col>
                        <Col xs={12} md={10} lg={8}>
                            <p>...and helped students create narrative digital maps.</p>
                            <img src="https://res.cloudinary.com/dnrk3irn4/image/upload/v1548291769/storymap-min.png" alt="a storymap about quinoa" className="relative" responsive />
                        </Col>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                        {!isDesktop && <Diamonds/>}
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} md={10} lg={8}>
                            <p>I've supported the production of eLearning modules...</p>
                            <img src="https://res.cloudinary.com/dnrk3irn4/image/upload/v1548291858/module-min.png" alt="eLearning module" className="relative" responsive />
                        </Col>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                        {!isDesktop && <Diamonds/>}
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} md={2} lg={4}>
                        </Col>
                        <Col xs={12} md={10} lg={8}>
                        <p>...and designed and taught online courses.</p>
                            <img src={require('../images/canvas.png')} alt="online class" className="relative" responsive />
                        </Col>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                        {!isDesktop && <Diamonds/>}
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} md={10} lg={8}>
                            <p>I've built full-stack web applications to help improve information tracking...</p>
                        <Row>
                            <Col xs={12} md={10} lg={8}>
                            <img src="https://github.com/odissii/odissii-app/raw/master/public/images/supervisor_dashboard_view.png" className="no-borders" height="80%" alt="dashboard view in odissii app" responsive/>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                        {!isDesktop && <Diamonds/>}
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} md={2} lg={4}>
                        </Col>
                        <Col xs={12} md={10} lg={8}>
                            <p>...and maintained web portfolios for community-oriented research projects.</p>
                            <img src={require('../images/myss.png')} alt="MYSS digital stories page" className="relative" responsive />
                            {/* <img src="https://res.cloudinary.com/dnrk3irn4/image/upload/v1548291844/digitalstories-min.png" alt="digital stories grid for MYSS project" className="relative" responsive /> */}
                        </Col>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                        {!isDesktop && <Diamonds/>}
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} md={10} lg={8}>
                            <p>I've also conducted my own digital research on social media communication; writing scripts to collect data and software to code and analyze data.</p>
                            <img src="https://res.cloudinary.com/dnrk3irn4/image/upload/v1548291805/twitter-full-min.jpg" alt="many birds flying with twitter icons" className="relative" responsive />
                        </Col>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                        {!isDesktop && <Diamonds/>}
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} lg={12}>
                            <p>I aim to utilize tools, platforms, and methodologies that foster critical thinking and information literacy skills while also centering accessibility and usability.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} lg={12}>
                            <div className="center">
                                <h3>Interested in working with me? <br/><Button bsSize="large" bsStyle="info" className="breathing-room" onClick={()=>window.location.href="mailto:larsmackenzie@gmail.com?body=Hi Lars!"}>Reach out</Button></h3>
                            </div>
                        </Col>
                    </Row>
                    <div className="row-padding"></div>
                    <div className="right">
                        <Link className="link" aria-labelledby="back-to-top-icon" to="/projects#back-arrow"><img className="no-borders" src={require('../images/up-arrow.png')} alt="back-to-top-icon"/><p>back to top</p></Link>
                    </div>
                </Grid>
            </section>
        );
    }
}

export default Projects; 