import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import Nav from '../Nav/Nav';

// todo: add isDesktop? here too and break into rows for mobile 
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
                        <div className="center"><h2>Hi! I'm Lars!</h2></div>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    {isDesktop ? (<Row>
                        <Col xs={12} md={6} lg={6}>
                            <Image src={require('./lars.jpg')} alt="Lars headshot" height="350" rounded responsive />
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <p className="about-text">I am a web developer with a background in research, higher education, and social services. I love creating technology that can improve people's lives - from <span className="emphasis">automating tedious processes, to building platforms to connect people, to delivering meaningful insights from under-utilized data.</span></p>
                            <div className="spacing"></div>
                            <p className="about-text">For the past six years, I've been pursuing a PhD at the University of Minnesota, where I studied how software and data-driven decision-making impact marginalized people. Specifically, I closely examined civil rights implications resulting from big data surveillance in healthcare, financial industries, and law.</p>
                            <div className="spacing"></div>
                            <p className="about-text">During that time, I was deeply involved with educational technology: helping faculty to integrate digital technology into their research and teaching, and training students to produce digital media projects. I've tackled big problems in this work, like figuring out how to <span className="emphasis">archive hundreds of student-made video projects while protecting their privacy,</span> or how to best highlight research insights from qualitative studies in <span className="emphasis">narrative digital maps.</span></p>
                            <div className="spacing"></div>
                            <p className="about-text">I'm passionate about pushing for critical data literacy while also helping people to build tools, platforms, and portfolios to showcase their ideas and forge connections.</p>
                        </Col>
                    </Row>) : (<div><Row>
                        <Col xs={12} md={6} lg={6}>
                            <Image src={require('./lars.jpg')} alt="Lars headshot" height="350" rounded responsive />
                        </Col>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                        <Row>
                            <Col xs={12} md={6} lg={6}>
                                <h4>I am a full-stack software developer with a background in research, higher education, and social services. I love creating technology that can improve people's lives - from <span className="emphasis">automating tedious processes, to building platforms to connect people, to delivering meaningful insights from under-utilized data.</span></h4>
                            </Col>
                        </Row>
                        <Row>
                        <div className="row-padding"></div>
                    </Row>
                        <Row>
                            <Col xs={12} md={6} lg={6}>
                                <h4>For the past six years, I've been pursuing a PhD at the University of Minnesota, where I studied how software and data-driven decision-making impact marginalized people. Specifically, I closely examined civil rights implications resulting from big data surveillance in healthcare, financial industries, and law.</h4>
                            </Col>
                        </Row>
                        <Row>
                        <div className="row-padding"></div>
                    </Row>
                        <Row>
                            <Col xs={12} md={6} lg={6}>
                                <h4>During that time, I was deeply involved with educational technology: helping faculty to integrate digital technology into their research and teaching, and training students to produce digital media projects.</h4>
                            </Col>
                        </Row>
                        <Row>
                        <div className="row-padding"></div>
                    </Row>
                    <Row>
                            <Col xs={12} md={6} lg={6}>
                            <h4> I've tackled big problems in this work, like figuring out how to <span className="emphasis">archive hundreds of student-made video projects while protecting their privacy,</span> or how to best highlight research insights from qualitative studies in <span className="emphasis">narrative digital maps.</span></h4>
                            </Col>
                        </Row>
                        <Row>
                        <div className="row-padding"></div>
                    </Row>
                        <Row>
                            <Col xs={12} md={6} lg={6}>
                                <h4>I'm passionate about helping build software for people who need custom websites or web applications but who don't always have access to them -- small business owners, non-profit organizations, researchers, students, artists, and entreprenuers.</h4>
                            </Col>
                        </Row></div>)}
                </Grid>

            </section>
        );
    }
}

export default connect()(Projects); 