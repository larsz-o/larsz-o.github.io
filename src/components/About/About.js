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
                            <Image src="https://res.cloudinary.com/dnrk3irn4/image/upload/c_scale,h_350/v1548291363/lars.jpg" alt="Lars headshot" height="350" rounded responsive />
                        </Col>
                        <Col xs={12} md={6} lg={6} className="dashed-edge">
                            <p className="about-text">I am an academic technologist and a web developer. I love creating technology that can improve people's lives - from <span className="emphasis">automating tedious processes, to building platforms to connect people, to delivering meaningful insights from under-utilized data.</span></p>
                            <div className="spacing"></div>
                            <p className="about-text">I earned my PhD at the University of Minnesota, where I studied how software and data-driven decision-making impact marginalized people from a critical perspective. Specifically, I closely examined social justice implications of big data surveillance and software design in healthcare, financial industries, and law as they relate to gender and race.</p>
                            <div className="spacing"></div>
                            <p className="about-text">During this time, I was deeply involved with educational technology: helping faculty to integrate digital technology into their research and teaching, and training students to produce digital media projects. I've tackled big problems in this work, like figuring out how to <span className="emphasis">archive hundreds of student-made video projects while protecting their privacy,</span> or how to best highlight research insights from qualitative studies in <span className="emphasis">narrative digital maps.</span></p>
                            <div className="spacing"></div>
                            <p className="about-text">I'm passionate about fostering critical data literacy while also helping people to build tools, platforms, and portfolios to showcase their ideas and forge connections.</p>
                        </Col>
                    </Row>) : (<div className="dashed-edge"><Row>
                        <Col xs={12} md={12} lg={12}>
                            <Image className="center" src="https://res.cloudinary.com/dnrk3irn4/image/upload/c_scale,h_350/v1548291363/lars.jpg" alt="Lars headshot" height="350" rounded responsive />
                        </Col>
                    </Row>
                   
                        <Row>
                            <Col xs={12} md={6} lg={6}>
                                <h4 className="about-text">I am an academic technologist and a web developer. I love creating technology that can improve people's lives - from <span className="emphasis">automating tedious processes, to building platforms to connect people, to delivering meaningful insights from under-utilized data.</span></h4>
                            </Col>
                        </Row>
                        <div className="spacing"></div>
                        <Row>
                            <Col xs={12} md={6} lg={6}>
                                <h4 className="about-text">I earned my PhD at the University of Minnesota, where I studied how software and data-driven decision-making impact marginalized people from a critical perspective. Specifically, I closely examined social justice implications of big data surveillance and software design in healthcare, financial industries, and law as they relate to gender and race.</h4>
                            </Col>
                        </Row>
                        <div className="spacing"></div>
                        <Row>
                            <Col xs={12} md={6} lg={6}>
                                <h4 className="about-text">During this time, I was deeply involved with educational technology: helping faculty to integrate digital technology into their research and teaching, and training students to produce digital media projects.</h4>
                            </Col>
                        </Row>
                        <div className="spacing"></div>
                    <Row>
                            <Col xs={12} md={6} lg={6}>
                            <h4 className="about-text"> I've tackled big problems in this work, like figuring out how to <span className="emphasis">archive hundreds of student-made video projects while protecting their privacy,</span> or how to best highlight research insights from qualitative studies in <span className="emphasis">narrative digital maps.</span></h4>
                            </Col>
                        </Row>
                        <div className="spacing"></div>
                        <Row>
                            <Col xs={12} md={6} lg={6}>
                                <h4 className="about-text">I'm passionate about fostering critical data literacy while also helping people to build tools, platforms, and portfolios to showcase their ideas and forge connections.</h4>
                            </Col>
                        </Row></div>)}
                </Grid>

            </section>
        );
    }
}

export default connect()(Projects); 