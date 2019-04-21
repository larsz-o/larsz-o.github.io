import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import Diamonds from '../Diamonds/Diamonds'; 

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
                <Grid>
                    <Row>
                        <h2 className="name-header">Lars Mackenzie</h2>
                        <h4 className="subheading">academic technologist + web developer</h4>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    {isDesktop ? (<Row>
                        <Col xs={12} md={6} lg={6}>
                            <Image src="https://res.cloudinary.com/dnrk3irn4/image/upload/c_scale,h_350/v1548291363/lars.jpg" alt="Lars headshot" height="350" rounded responsive />
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <ul class="about-text">
                                <div class="list-border"><li>- I am a problem solver</li></div>
                                <li>- I design online educational experiences for <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer">work</a></li>
                                <li>- I care a lot about accessibility and user experience</li>
                                <li>- I have worked on a bunch of neat <a href="/#/projects">educational technology</a> projects</li>
                                <li>- I have a <a href={require('../images/Mackenzie_Resume_2019_04_07.pdf')} target="_blank" rel="noopener noreferrer">resume</a> with more details</li>
                                <li>- I <a href="https://softwareforgood.com/talking-tech-for-good-lars-mackenzie/" target="_blank" rel="noopener noreferrer">believe</a> in critical thinking and changing systems that no longer serve our needs (or maybe never have)</li>
                                <li>- I am trained as an academic and a <a href="https://www.github.com/larsz-o" target="_blank" rel="noopener noreferrer">full-stack software engineer</a></li>
                                <li>- I wrote a dissertation about how information systems impact trans people whose identities change over time</li>
                                <li>- I like reading <a href="https://twitter.com/larszmac" target="_blank" rel="noopener noreferrer">Twitter</a> but usually just delete my tweets</li>
                                <li>- I am working on leveling up my skills in Python</li>
                                <li>- I look at my <a className="link" href="mailto:larsmackenzie@gmail.com?body=Hi Lars!">email</a> a lot and love to connect with new people</li>
                                <li>- I am training myself to make the perfect pizza</li>
                                <li>- I already have the perfect dog</li>
                            </ul>
                        </Col>
                    </Row>) : (<div className="margin-bottom">
                        
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <Image className="center" src="https://res.cloudinary.com/dnrk3irn4/image/upload/c_scale,h_350/v1548291363/lars.jpg" alt="Lars headshot" height="350" rounded responsive />
                        </Col>
                    </Row>
                    <Col xs={12} md={6} lg={6}>
                    
                            <ul class="about-text">
                                <div class="margin-top">
                                <li>- I am a problem solver</li></div>
                                <li>- I design online educational experiences for <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer">work</a></li>
                                <li>- I care a lot about accessibility and user experience</li>
                                <li>- I have worked on a bunch of neat <a href="/#/projects">educational technology</a> projects</li>
                                <li>- I have a <a href={require('../images/Mackenzie_Resume_2019_04_07.pdf')} target="_blank" rel="noopener noreferrer">resume</a> with more details</li>
                                <li>- I <a href="https://softwareforgood.com/talking-tech-for-good-lars-mackenzie/" target="_blank" rel="noopener noreferrer">believe</a> in critical thinking and changing systems that no longer serve our needs (or maybe never have)</li>
                                <li>- I am trained as an academic and a <a href="https://www.github.com/larsz-o" target="_blank" rel="noopener noreferrer">full-stack software engineer</a></li>
                                <li>- I wrote a dissertation about how information systems impact trans people whose identities change over time</li>
                                <li>- I like reading <a href="https://twitter.com/larszmac" target="_blank" rel="noopener noreferrer">Twitter</a> but usually just delete my tweets</li>
                                <li>- I am working on leveling up my skills in Python</li>
                                <li>- I look at my <a className="link" href="mailto:larsmackenzie@gmail.com?body=Hi Lars!">email</a> a lot and love to connect with new people</li>
                                <li>- I am training myself to make the perfect pizza</li>
                                <li>- I already have the perfect dog</li>
                            </ul>
                        </Col>
                        <Diamonds/>
                        </div>)}
                </Grid>

            </section>
        );
    }
}

export default connect()(Projects); 