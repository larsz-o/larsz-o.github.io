import React, { Component } from 'react';
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
                        <h4 className="subheading">web developer + academic technologist</h4>
                    </Row>
                    <Row>
                        <div className="row-padding"></div>
                    </Row>
                    {isDesktop ? (<Row>
                        <Col xs={12} md={6} lg={6}>
                            <Image className="no-borders" src={require('../images/lars.jpg')} alt="Lars headshot" height="350px" rounded />
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <ul className="about-text">
                                <div><li class="list-border">I am a problem solver.</li></div>
                                <li>I currently design online educational experiences for <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer">work.</a></li>
                                <li>I get to do a lot of cool stuff like launch AWS environments for software engineering courses, build web apps, and consult with instructors on how to increase interactivity, collaboration, and peer learning in online learning environments.</li>
                                <li>I care about accessibility, information architecture, and learning something new every day.</li>
                                <li>I have built some neat projects on my own and on teams as a <a href="https://www.github.com/larsz-o" target="_blank" rel="noopener noreferrer">full-stack software developer.</a></li>
                                <li>I am trained as an academic and I wrote a dissertation about how <a href={require('../images/AfterlifeData.pdf')} target="_blank" rel="noopener noreferrer" title="Afterlife of Data">marginalized people navigate through commerical and medical information systems.</a></li>
                                <li>I like reading <a href="https://twitter.com/larszmac" target="_blank" rel="noopener noreferrer">Twitter</a> but usually just delete my tweets.</li>
                                <li>I look at my <a href="mailto:larsmackenzie@gmail.com?body=Hi Lars!">email</a> a lot and love to connect with new people.</li>
                                <li>I am training to make the perfect pizza</li>
                                <li>I already have the perfect <a href="https://res.cloudinary.com/dnrk3irn4/image/upload/v1555811740/IMG_0366.jpg" target="_blank" rel="noopener noreferrer">dog.</a></li>
                            </ul>
                        </Col>
                    </Row>) : (<div className="margin-bottom">
                        
                    <Row>
                        <Col xs={12} md={12} lg={12} className="center">
                            <Image className="no-borders" src="https://res.cloudinary.com/dnrk3irn4/image/upload/c_scale,h_350/v1548291363/lars.jpg" alt="Lars headshot" height="350" rounded responsive />
                        </Col>
                    </Row>
                    <Col xs={12} md={6} lg={6}>
                    
                            <ul className="about-text-mobile">
                                <div class="margin-top">
                                <li class="list-border">I am a problem solver.</li></div>
                                <li>I currently design online educational experiences for <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer">work.</a></li>
                                <li>I get to do a lot of cool stuff like launch AWS environments for software engineering courses, build web apps, and consult with instructors on how to increase interactivity, collaboration, and peer learning in online learning environments.</li>
                                <li>I care about accessibility, information architecture, and learning something new every day.</li>
                                <li>I have built some neat projects on my own and on teams as a <a href="https://www.github.com/larsz-o" target="_blank" rel="noopener noreferrer">full-stack software developer.</a></li>
                                <li>I am trained as an academic and I wrote a dissertation about how <a href={require('../images/AfterlifeData.pdf')} target="_blank" rel="noopener noreferrer" title="Afterlife of Data">marginalized people navigate through commerical and medical information systems.</a></li>
                                <li>I like reading <a href="https://twitter.com/larszmac" target="_blank" rel="noopener noreferrer">Twitter</a> but usually just delete my tweets.</li>
                                <li>I look at my <a href="mailto:larsmackenzie@gmail.com?body=Hi Lars!">email</a> a lot and love to connect with new people.</li>
                                <li>I am training to make the perfect pizza.</li>
                                <li>I already have the perfect <a href="https://res.cloudinary.com/dnrk3irn4/image/upload/v1555811740/IMG_0366.jpg" target="_blank" rel="noopener noreferrer">dog.</a></li>
                            </ul>
                            <div className="margin-top"><Diamonds/></div>
                        </Col>
                        
                       
                        </div>)}
                </Grid>

            </section>
        );
    }
}

export default Projects; 