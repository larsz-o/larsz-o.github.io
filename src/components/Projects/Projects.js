import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Nav from '../Nav/Nav';


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
            isDesktop: window.innerWidth > 1024
        })
    }
    render() {
        let isDesktop = this.state.isDesktop;
        return (
            <section className="main">
                <Nav />
                <Grid>
                    <Row>
                        <Col xs={12} md={6} lg={4}>
                            <h2>Projects</h2>
                        </Col>
                    </Row>
                    <Row>
                        {isDesktop ? (<div>
                            <Col xs={12} md={6} lg={4}>
                                <h3>I've worked on a number of projects where I've been responsible for integrating technology into teaching, building web applications, and promoting research through technology.</h3>
                            </Col>
                            <Col xs={12} md={6} lg={8}>
                                <img src="https://res.cloudinary.com/dnrk3irn4/image/upload/c_scale,h_500/v1548291380/apple.jpg" alt="computer" responsive />
                            </Col></div>) :
                            (<div>
                                <Col xs={12} md={6} lg={4}>
                                    <h3>I've worked on a number of projects where I've been responsible for integrating technology into teaching, building web applications, and promoting research through technology.</h3>
                                </Col>
                            </div>)}
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} md={10} lg={8}>
                            <h3>I've developed and faciliated trainings about digital storytelling and podcasting...</h3>
                            <img src="https://res.cloudinary.com/dnrk3irn4/image/upload/v1548291805/imovie-min.png" alt="iMovie screenshot" className="relative" responsive />
                        </Col>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} md={2} lg={4}>
                        </Col>
                        <Col xs={12} md={10} lg={8}>
                            <h3>...and helped students create narrative digital maps.</h3>
                            <img src="https://res.cloudinary.com/dnrk3irn4/image/upload/v1548291769/storymap-min.png" alt="a storymap about quinoa" className="relative" responsive />
                        </Col>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} md={10} lg={8}>
                            <h3>I've supported the production of eLearning modules...</h3>
                            <img src="https://res.cloudinary.com/dnrk3irn4/image/upload/v1548291858/module-min.png" alt="eLearning module" className="relative" responsive />
                        </Col>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} md={2} lg={4}>
                        </Col>
                        <Col xs={12} md={10} lg={8}>
                        <h3>...and designed and taught online courses.</h3>
                            <img src="https://res.cloudinary.com/dnrk3irn4/image/upload/v1548291975/transhealth-min.png" alt="online class" className="relative" responsive />
                        </Col>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} md={10} lg={8}>
                            <h3>I've built full-stack web applications to help improve information tracking...</h3>
                            <img src="https://res.cloudinary.com/dnrk3irn4/image/upload/v1548291797/card-min.png" alt="fitness tracker software" className="relative" responsive />
                        </Col>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} md={2} lg={4}>
                        </Col>
                        <Col xs={12} md={10} lg={8}>
                            <h3>...and maintained web portfolios for community-oriented research projects.</h3>
                            <img src="https://res.cloudinary.com/dnrk3irn4/image/upload/v1548291844/digitalstories-min.png" alt="digital stories grid for MYSS project" className="relative" responsive />
                        </Col>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} md={10} lg={8}>
                            <h3>I've also conducted my own digital research on social media communication; writing scripts to collect data and software to code and analyze data.</h3>
                            <img src="https://res.cloudinary.com/dnrk3irn4/image/upload/v1548291805/twitter-full-min.jpg" alt="many birds flying with twitter icons" className="relative" responsive />
                        </Col>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} lg={12}>
                            <h3>As an academic/technologist, I aim to utilize tools, platforms, and methodologies that foster critical thinking and information literacy skills while also centering accessibility and usability.</h3>
                        </Col>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                        <Col xs={12} lg={12}>
                            <div className="center">
                                <h3>Interested in working with me? <Button bsSize="large" bsStyle="info" onClick={() => this.props.history.push('/contact')}>Reach out</Button></h3>
                            </div>
                        </Col>
                    </Row>
                </Grid>

            </section>
        );
    }
}

export default Projects; 