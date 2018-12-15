import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import Nav from '../Nav/Nav';


class Projects extends Component {
    render() {
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
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <Image src="https://raw.githubusercontent.com/larsz-o/larsz-o.github.io/master/src/static/lars.jpg" alt="Lars headshot" height="350" rounded />
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <p>I am a full-stack software developer with a background in research, higher education, and social services. I love creating technology that can improve people's lives - from <span className="emphasis">automating tedious processes, to building platforms to connect people, to delivering meaningful insights from under-utilized data.</span></p>
                            <p>For the past six and a half years, I've been pursuing a PhD at the University of Minnesota, where I studied how software and data-driven decision-making impacts marginalized people.</p>
                            <p>During that time, I was deeply involved with educational technology: helping faculty to integrate digital technology into their research and teaching, and training students to produce digital media projects. I've tackled big problems in this work, like figuring out how to <span className="emphasis">archive hundreds of student-made video projects while protecting their privacy,</span> or how to best highlight research insights from qualitative studies in <span className="emphasis">narrative digital maps.</span></p>
                            <p>I'm passionate about helping build software for people who need custom websites or web applications but who don't always have access to them -- small business owners, non-profit organizations, researchers, students, artists, and entreprenuers.</p>
                        </Col>
                    </Row>
                </Grid>

            </section>
        );
    }
}

export default connect()(Projects); 